
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/offer") {
      if (request.method === "GET") {
        let offer = null;
        try {
          const raw = await env.SITE_DATA.get("current_offer");
          if (raw) offer = JSON.parse(raw);
        } catch (e) {}
        return Response.json({ offer }, { headers: { "Cache-Control": "no-store" } });
      }

      const supplied = request.headers.get("X-Owner-Key") || "";
      if (!env.OWNER_KEY || supplied !== env.OWNER_KEY) {
        return Response.json({ error: "غير مصرح" }, { status: 401 });
      }

      if (request.method === "PUT") {
        let body;
        try { body = await request.json(); }
        catch { return Response.json({error:"بيانات غير صحيحة"},{status:400}); }

        const offer = {
          title: String(body.title || "").slice(0, 100),
          text: String(body.text || "").slice(0, 500),
          price: String(body.price || "").slice(0, 20),
          expiry: String(body.expiry || "").slice(0, 20),
          active: !!body.active,
          updatedAt: new Date().toISOString()
        };
        await env.SITE_DATA.put("current_offer", JSON.stringify(offer));
        return Response.json({ ok: true, offer });
      }

      if (request.method === "DELETE") {
        await env.SITE_DATA.delete("current_offer");
        return Response.json({ ok: true });
      }

      return new Response("Method Not Allowed", { status: 405 });
    }

    return env.ASSETS.fetch(request);
  }
};

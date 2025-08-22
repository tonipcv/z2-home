"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const PASSWORD = "milionario27@";

type Submission = {
  id: number;
  name: string;
  whatsapp: string;
  clinicLocation: string;
  annualRevenue: string;
  createdAt: string;
};

export default function ReportAccessAdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rows, setRows] = useState<Submission[]>([]);

  const fetchRows = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/report-access/list", {
        headers: { "x-admin-pass": password },
      });
      if (!res.ok) {
        const msg = (await res.json()).error || "Falha ao carregar";
        throw new Error(msg);
      }
      const json = await res.json();
      setRows(json.data || []);
    } catch (e: any) {
      setError(e?.message || "Erro inesperado");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authed) fetchRows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authed]);

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <h1 className="text-2xl font-semibold">Admin · Report Access Requests</h1>
        {!authed ? (
          <div className="mt-6 max-w-sm space-y-3">
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Informe a senha"
              />
            </div>
            <Button
              onClick={() => {
                if (password === PASSWORD) {
                  setAuthed(true);
                } else {
                  setError("Senha incorreta");
                }
              }}
            >
              Entrar
            </Button>
            {error && <p className="text-red-600 text-sm">{error}</p>}
          </div>
        ) : (
          <div className="mt-6">
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={fetchRows} disabled={loading}>
                {loading ? "Atualizando..." : "Atualizar"}
              </Button>
              <span className="text-sm text-gray-600">Total: {rows.length}</span>
            </div>
            {error && <p className="text-red-600 text-sm mt-3">{error}</p>}

            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="py-2 pr-4">ID</th>
                    <th className="py-2 pr-4">Nome</th>
                    <th className="py-2 pr-4">Whatsapp</th>
                    <th className="py-2 pr-4">Localização</th>
                    <th className="py-2 pr-4">Faturamento</th>
                    <th className="py-2 pr-4">Criado em</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.id} className="border-b hover:bg-gray-50">
                      <td className="py-2 pr-4">{r.id}</td>
                      <td className="py-2 pr-4">{r.name}</td>
                      <td className="py-2 pr-4">{r.whatsapp}</td>
                      <td className="py-2 pr-4">{r.clinicLocation}</td>
                      <td className="py-2 pr-4">{r.annualRevenue}</td>
                      <td className="py-2 pr-4">{new Date(r.createdAt).toLocaleString()}</td>
                    </tr>
                  ))}
                  {rows.length === 0 && !loading && (
                    <tr>
                      <td className="py-6 text-gray-500" colSpan={6}>
                        Nenhum registro encontrado.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

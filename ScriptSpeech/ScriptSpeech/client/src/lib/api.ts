import { apiRequest } from "./queryClient";
import type { ScriptConversion } from "@shared/schema";

export async function convertScript(data: ScriptConversion) {
  const res = await apiRequest("POST", "/api/convert", data);
  return res.json();
}

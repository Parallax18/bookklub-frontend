import { format, formatRelative, parseISO } from "date-fns";
import { enGB } from "date-fns/locale";

export function formatDate(date: Date): string {
  return format(date, "EEE, d'th' MMM, yyyy 'at' h:mma", { locale: enGB });
}

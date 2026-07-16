/** NZD 금액을 대략적인 한화(만 원 단위 반올림)로 변환 */
export function toApproxKrw(nzd: number, rate: number): number {
  const krw = nzd * rate;
  return Math.round(krw / 10_000) * 10_000;
}

export function formatApproxKrw(nzd: number, rate: number): string {
  const krw = toApproxKrw(nzd, rate);
  const manwon = krw / 10_000;
  return `약 ${manwon.toLocaleString("ko-KR")}만원`;
}

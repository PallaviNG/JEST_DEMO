export default function Sum({ values }) {
  let { a, b } = values;
  console.log(a, b);
  return (
    <>
      <div data-testid="sum-1">{a}</div>
      <div data-testid="sum-2">{b}</div>
    </>
  );
}

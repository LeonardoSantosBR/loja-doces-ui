function Header() {
  const date = new Date();
  const today = `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
  const month = `${date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1}`;
  const year = date.getFullYear();
  const dateFomated = `${today}/${month}/${year}`;

  return (
    <>
      <div className="w-screen h-[10%] bg-amber-400 flex items-center">
        <p className="text-2xl font-bold font-sans ml-4">
          LOJA - {dateFomated}
        </p>
      </div>
    </>
  );
}

export default Header;

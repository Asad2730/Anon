//will recive cat_id and show list of all products in card form

import NavBar from "../components/NavBar";

export default function Product() {
  return (
   <div className="flex flex-col h-screen w-screen">
      <section className="flex h-[20%] w-screen flex-col">
        <NavBar/>
      </section>
      <section className="flex h-[80%] w-screen bg-fuchsia-600">
        Display list of products that macth category_id ...comming sooon ...
        Display inForm of cards and each row should have 4 cards then move to next col
        For mobile view show in cols only
      </section>
   </div>
  );
}

import { filterList, products } from "@/components/product/products";
import ProductFilter from "./productfilter";
import ProductCard from "./productcard";

import { Pagination } from "@/components/component/Pagination";


export default function Product() {
    return (
       <div className="lg:px-30 px-4 mt-5 lg:mt-20 ml-4 md:ml-0 ">
        <section className="flex flex-col md:flex-col lg:flex-row gap-10 ">
            <section className="w-full lg:w-1/5">
              <ProductFilter  filterList={filterList} />
            </section>
            <section className="w-full lg:w-4/5">
               <h1 className="text-2xl font-bold mb-4">All Products</h1>
               <div className="grid mb-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ) )}
               </div>
               <Pagination />
            </section>
        </section>    
       </div>
    )
}
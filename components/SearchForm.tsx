import { Search } from "lucide-react";
import Form from "next/form";

type SearchFormType = {
  query?: string;
};

const SearchForm = ({ query }: SearchFormType) => {
  return (
    <Form action="/marketplace" className="w-full">
      <div className="has-[input:focus]:border-primaryColor mb-5 flex items-center justify-center gap-4 border-b bg-transparent lg:mb-0 lg:bg-white">
        <input
          name="query"
          defaultValue={query}
          type="text"
          className="placeholder:text-tertiaryColor h-10 w-full text-base outline-none lg:h-auto"
          placeholder="Search products..."
        />

        <button type="submit">
          <Search className="text-tertiaryColor size-5 cursor-pointer lg:size-6" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;

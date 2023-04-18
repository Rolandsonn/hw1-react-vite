import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { fetchPokemons } from "../../api/fetchPokemons";
import PokemonList from "../../components/PokemonList";
import Pagination from "../../components/Pagination";
const MainPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [offset, setOffset] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = +searchParams.get("page");

  const limit = 8;

  useEffect(() => {
    fetchPokemons(limit, offset).then((pokeList) => {
      setPokemonList(pokeList.results);
      const count = Math.ceil(pokeList.count / limit);
      setPageCount(count);
    });
  }, [offset]);

  useEffect(() => {
    currentPage ? setPage(currentPage) : setPage(1);
  }, [currentPage]);

  const handleNext = () => {
    if (page === pageCount) return;
    setPage((prevState) => prevState + 1);
    setOffset((prevState) => prevState + limit);
  };

  const handlePrev = () => {
    if (page === 1) return;
    setPage((prevState) => prevState - 1);
    setOffset((prevState) => prevState - limit);
  };

  return (
    <>
      <div className="container">
        {pokemonList.length > 0 && <PokemonList pokemonList={pokemonList} />}
        <Pagination
          handleNext={handleNext}
          handlePrev={handlePrev}
          pageCount={pageCount}
          page={page}
        />
      </div>
    </>
  );
};

export default MainPage;

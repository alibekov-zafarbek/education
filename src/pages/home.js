// import React from "react";
import { CardGroup, Filter, Search } from "../components";
import { useTranslation, Trans } from "react-i18next";

const Home = () => {
  const { t ,i18n} = useTranslation();

  const Click = (e) => {
    i18n.changeLanguage(e)
    localStorage.setItem('lang', e)
  };
  return (
    <>
      <Search />
        <button onClick={() => (Click('en'))}>en</button><br />
        <button onClick={() => (Click('fr'))}>fr</button><br />
      <h1>
        <Trans>welcome</Trans>
      </h1>


      {/* <Filter /> */}
      <CardGroup />
    </>
  );
};

export default Home;

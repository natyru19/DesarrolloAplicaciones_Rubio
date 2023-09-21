import { StyleSheet } from "react-native";
import React from "react";
import  Header from "../components/Header";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <>
      <Header title={'Home'} />
      <Categories />
    </>
  );
};

export default Home

const styles = StyleSheet.create({});

import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
//import "@openzeppelin/hardhat-upgrades";

//import "@nomicfoundation/hardhat-toolbox";
dotenv.config()

//require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
export const solidity = "0.8.18";
export const networks = {
  mumbai: {
    url: process.env.POLYGON_MUMBAI,
    accounts: [process.env.PRIVATE_KEY],
  },
};
export const etherscan = {
  apiKey: {
    polygonMumbai: process.env.API_KEY,
  },
};

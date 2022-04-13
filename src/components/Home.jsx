import React from "react";
import { Card, Typography, Button, Form, Input } from "antd";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { abi } from "../contracts/NeftifyGuilds.json";
import NFTform from "./NFTForm";

export default function QuickStart() {
  const { account } = useMoralis();
  const { runContractFunction, isLoading } = useWeb3Contract({
    functionName: "mint",
    abi,
    contractAddress: "0x5e2bfecdb69b1d9cd7f10cdf0151d018fc5386e1",
    params: {
      account,
      id: 0,
      amount: 1,
    },
  });

  return (
    <div style={{ display: "flex" }}>
      <Card
        bordered={false}
        style={{
          width: 600,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography.Title level={3}>NFT Minter</Typography.Title>
        <img
          src="neftify-guild.svg"
          alt="Test"
          style={{ marginBottom: "2rem", width: "320px"}}
        />
        <NFTform />

        <Button
          type="primary"
          shape="round"
          size="large"
          style={{ width: "100%" }}
          loading={isLoading}
          onClick={() => runContractFunction()}
        >
          MINT
        </Button>
      </Card>
    </div>
  );
}

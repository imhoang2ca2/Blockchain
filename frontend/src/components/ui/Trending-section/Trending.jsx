import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";

import { NFT__DATA } from "../../../assets/data/data";
import "./trending.css";

import NftCard from "../Nft-card/NftCard";
import NFTContext from "../../../context/NFTContext";

const Trending = () => {
  const { fetchNFTs, connectingWithSmartContract } = useContext(NFTContext)
  const [data, setData] = useState(NFT__DATA)
  const handleFetchNFT = async () => {
    const data = await fetchNFTs()
    setData(data)
  }
  useEffect(() => {
    handleFetchNFT()
  }, [])
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h3 className="trending__title">Trending</h3>
          </Col>

          {data?.slice(0, 8).map((item) => (
            <Col lg="3" md="4" sm="6" key={item.id} className="mb-4">
              <NftCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Trending;

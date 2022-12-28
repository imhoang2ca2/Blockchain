import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import NftCard from "../Nft-card/NftCard";
import { NFT__DATA } from "../../../assets/data/data.js";

import "./live-auction.css";
import NFTContext from "../../../context/NFTContext";

const LiveAuction = () => {
  const { fetchNFTs, connectingWithSmartContract } = useContext(NFTContext)
  const [data, setData] = useState(NFT__DATA)
  const handleFetchNFT = async () => {
    const data = await fetchNFTs()
    setData(data)
  }
  useEffect(()=> {
    handleFetchNFT()
  },[])
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="live__auction__top d-flex align-items-center justify-content-between ">
              <h3>Live Auction</h3>
              <span>
                <Link to="/market">Explore more</Link>
              </span>
            </div>
          </Col>

          {data?.slice(0, 4).map((item, index) => (
            <Col lg="3" md="4" sm="6" className="mb-4" key={index}>
              <NftCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LiveAuction;

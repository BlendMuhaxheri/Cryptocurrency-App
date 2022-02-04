import React, { useState, useEffect } from 'react';
import millify from 'millify'
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../../services/cryptoApi';

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState([])
    const [searchBar, setSearchBar] = useState('')
    console.log(cryptosList);
    useEffect(() => {
        const filteredCryptos = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchBar.toLocaleLowerCase()))
        setCryptos(filteredCryptos)

    }, [searchBar, cryptosList])

    if (isFetching) return 'Loading...'
    const handleInputChange = (e) => {
        setSearchBar(e.target.value)
    }
    console.log(searchBar);

    return (
        <>
            {!simplified && (
                <div className='search-crypto'>
                    <Input placeholder='Search Cryptocurreny' onChange={handleInputChange} />
                </div>
            )}
            <Row gutter={[32, 32]} className='crypto-card-container'>
                {cryptos?.map(crypto => (
                    <Col xs={24} sm={12} lg={6} className='crypto-card' key={crypto.id}>
                        <Link to={`/cryptodetails/${crypto.uuid}`}>
                            <Card title={`${crypto.rank}. ${crypto.name}`}
                                extra={<img className='crypto-image' src={crypto.iconUrl}
                                    hoverable
                                />}>
                                <p>Price :{millify(crypto.price)}</p>
                                <p>Market Cap :{millify(crypto.marketCap)}</p>
                                <p>Daily Change :{millify(crypto.change)} %</p>
                            </Card>
                        </Link>
                    </Col>
                ))}

            </Row>

        </>
    )
};

export default Cryptocurrencies;

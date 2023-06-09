import React, { useEffect, useState } from "react";

import { Card, Heading, Text, Divider, Button, CardHeader, CardBody, CardFooter, Image, Stack, Box, Flex, Grid, GridItem } from '@chakra-ui/react'

import { Container } from '@chakra-ui/react'
import { CardComponent } from "./CardComponent";

import { ButtonGroup } from '@chakra-ui/react'

import { EmailIcon, ArrowForwardIcon } from '@chakra-ui/icons';


import axios from "axios";
import { PokeInfoComponent } from "./PokeInfoComponent";

import './../components/style.css'

export const MainComponent = () => {

    //logica para la traida de los poke
    const [pokeData, setPokeData] = useState([]);

    const [loading, setLoading] = useState(true);

    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');

    const [nextUrl, setNextUrl] = useState();

    const [previusUrl, setPreviusUrl] = useState();

    const [pokeDex, setPokeDex] = useState();

    //Creacion de una fucnion 
    const pokeFun = async () => {
        setLoading(true);
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPreviusUrl(res.data.previous);
        // console.log(res.data.results)

        getPokemon(res.data.results);
        setLoading(false);

        //Another..
        // console.log(pokeData)
    }

    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url);
            console.log(result.data)
            // alert(result.data)
            // setPokeData(state => {
            //     state = [...state, result.data]
            //     // alert(state.length)
            //     //Vamo a ordenar
            //     state.sort((a, b) => a.id > b.id ? 1 : -1)
            //     return state;
            // })

            setPokeData((state) => {
                const existingPokemonIds = state.map((pokemon) => pokemon.id);
                const newPokemon = result.data;

                if (!existingPokemonIds.includes(newPokemon.id)) {
                    const newState = [...state, newPokemon];
                    newState.sort((a, b) => a.id > b.id ? 1 : -1);
                    return newState;
                }

                return state;
            });

        })
    }


    useEffect(() => {
        pokeFun();
    }, [url])

    return (
        <div >
            {/* <Grid display="flex" m={4}>
                <Box width="60%" bg="red.200">


                    sdfasdf
                </Box>
                <Box width="40%" bg="blue.200" ml="20px">

                    sfasdf
                </Box>
            </Grid> */}
            <Box m={4} bg="gray.100">
                <div className="container">
                    <img
                        src="data:image/jpeg;base64,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" // Reemplaza con la URL de la imagen del logotipo
                        alt="Logo"
                        className="logo"
                    />
                    <h1 className="title">POKÉMON</h1>
                </div>



                <Container maxW='1x2' marginTop={4}>
                    {/* <Grid templateColumns="repeat(4, 1fr)" gap={4}> */}
                    {/* <GridItem > */}
                    <CardComponent pokemon={pokeData} loading={loading} infoPokemon={poke => setPokeDex(poke)} />
                    {/* </GridItem> */}

                    {/* </Grid> */}




                </Container>
                <Box m={4} padding={2}>

                    <Container maxW='8x2' className="mt-4" centerContent>
                        <Stack direction='row' spacing={4} >
                            {previusUrl && <Button onClick={() => {
                                setPokeData([])
                                setUrl(previusUrl)
                            }} leftIcon={<ArrowForwardIcon transform="rotate(180deg)" />} colorScheme='teal' variant='outline'>
                                Previous
                            </Button>}


                            {nextUrl && <Button onClick={() => {
                                setPokeData([])
                                setUrl(nextUrl)
                            }} rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                                Next
                                <PokeInfoComponent />
                            </Button>}
                        </Stack>
                    </Container>
                </Box>
            </Box>

            <div className="right-content">
                <PokeInfoComponent data={pokeDex} />
            </div>
        </div>
    );
}
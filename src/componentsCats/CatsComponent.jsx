import React, { useEffect, useState } from "react";


import { Card, Heading, Text, Divider, ButtonGroup, Button, CardHeader, CardBody, CardFooter, Image, Stack, Box, Flex, Grid, GridItem, Center } from '@chakra-ui/react'


import { EmailIcon, ArrowForwardIcon, ViewIcon } from '@chakra-ui/icons';

import {
    ChakraProvider,

    theme,
} from '@chakra-ui/react';
import axios from "axios";


export const CatsComponent = () => {

    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState('https://cataas.com/cat');


   

    const getCats = async () =>{
        setLoading(true);
        const result = await axios.get(url);
        console.log(result)

    }
    useEffect(()=>{
        getCats();
    }, [url])


    return (
        <>
            <ChakraProvider theme={theme}>
                {/* <Box textAlign="center" fontSize="xl"> */}
                <Flex justifyContent="center" alignItems="center" minHeight="100vh">
                    <Box textAlign="center" fontSize="xl">

                        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
                            gap={4}
                            padding={6}
                        >

                            <GridItem >

                                <Card maxW='sm'>
                                    <CardBody>
                                        <Image
                                            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                            alt='Green double couch with wooden legs'
                                            borderRadius='lg'
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>Living room Sofa</Heading>
                                            <Text>
                                                This sofa is perfect for modern tropical spaces, baroque inspired
                                                spaces, earthy toned spaces and for people who love a chic design with a
                                                sprinkle of vintage design.
                                            </Text>
                                            <Text color='blue.600' fontSize='2xl'>
                                                $450
                                            </Text>
                                        </Stack>
                                    </CardBody>
                                    <Divider />
                                    <CardFooter>
                                        <ButtonGroup spacing='2'>
                                            <Button variant='solid' colorScheme='blue'>
                                                Buy now
                                            </Button>
                                            <Button variant='ghost' colorScheme='blue'>
                                                Add to cart
                                            </Button>
                                        </ButtonGroup>
                                    </CardFooter>
                                </Card>
                            </GridItem>

                            <GridItem >

                                <Card maxW='sm'>
                                    <CardBody>
                                        <Image
                                            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                            alt='Green double couch with wooden legs'
                                            borderRadius='lg'
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>Living room Sofa</Heading>
                                            <Text>
                                                This sofa is perfect for modern tropical spaces, baroque inspired
                                                spaces, earthy toned spaces and for people who love a chic design with a
                                                sprinkle of vintage design.
                                            </Text>
                                            <Text color='blue.600' fontSize='2xl'>
                                                $450
                                            </Text>
                                        </Stack>
                                    </CardBody>
                                    <Divider />
                                    <CardFooter>
                                        <ButtonGroup spacing='2'>
                                            <Button variant='solid' colorScheme='blue'>
                                                Buy now
                                            </Button>
                                            <Button variant='ghost' colorScheme='blue'>
                                                Add to cart
                                            </Button>
                                        </ButtonGroup>
                                    </CardFooter>
                                </Card>
                            </GridItem>




                        </Grid>

                    </Box>
                </Flex>

                {/* </Box> */}
            </ChakraProvider>

        </>
    );
}
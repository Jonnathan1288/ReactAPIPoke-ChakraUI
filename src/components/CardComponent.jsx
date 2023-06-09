import React from "react";


import { Card, Heading, Text, Divider, ButtonGroup, Button, CardHeader, CardBody, CardFooter, Image, Stack, Box, Flex, Grid, GridItem, Center } from '@chakra-ui/react'

import { Container } from '@chakra-ui/react'

import { EmailIcon, ArrowForwardIcon, ViewIcon } from '@chakra-ui/icons';


export const CardComponent = ({ pokemon, loading, infoPokemon }) => {
    // console.log(pokemon)

    return (
        <div>
              <Flex justifyContent="center" alignItems="center" minHeight="100vh">
                    <Box textAlign="center" fontSize="xl">
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(5, 1fr)" }}
                    gap={10}>
                {loading ? <h1>Loading...</h1> :
                    pokemon.map((item) => {
                        return (
                            <>

                                <GridItem >
                                    <Card maxW='sm' >
                                        <CardBody>
                                            <Center h='100px' color='white'>
                                                <Image
                                                    src={item.sprites.front_default}
                                                    alt='Green double couch with wooden legs'
                                                    borderRadius='lg'
                                                />
                                            </Center>

                                            <Stack mt='6' spacing='3'>
                                                <Heading size='md'>{item.name.toUpperCase()}</Heading>
                                                {/* <Text>
                                                    This sofa is
                                                </Text> */}
                                                <Text color='blue.600' fontSize='2xl'>
                                                    {item.id}
                                                </Text>
                                            </Stack>
                                        </CardBody>
                                        <Divider />
                                        <CardFooter>
                                        <Container maxW='8x2' className="mt-4" centerContent>
                                     
                                                <ButtonGroup spacing='2' >
                                                    {/* <Button leftIcon={<ViewIcon transform="rotate(180deg)" />} variant='outline' colorScheme='blue' key={item.id} onClick={() => infoPokemon(item)} >
                                                        Info
                                                    </Button> */}

                                                    <Button leftIcon={<ViewIcon />} colorScheme='pink' variant='solid' key={item.id} onClick={() => infoPokemon(item)} >
                                                    Info
                                                    </Button>
                                                    <Button leftIcon={<ArrowForwardIcon />} variant='outline' colorScheme='blue' >
                                                        Info
                                                    </Button>
                                                </ButtonGroup>
                                                </Container>


                                        </CardFooter>
                                    </Card>
                                </GridItem>

                            </>
                        );
                    })
                }
            </Grid>

            </Box>
                </Flex>

            {/* <Container maxW='8x2' className="mt-4">
                <Grid templateColumns="repeat(4, 1fr)" gap={4}>*/}

            {/* <GridItem >  */}

            {/* <Card maxW='sm'>
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
                        </Card> */}

            {/* </GridItem> */}


            {/* </Grid> */}

            {/* </Container> */}
        </div>
    );
}

'use client'
import { LayoutBg, WARNA } from '@/module/_global';
import { Box, Flex, Image, Paper, rem, Select, SimpleGrid, Stack, Text } from '@mantine/core';

function Content() {
  return (
    <Box>
      <LayoutBg>
        <Box p={20}>
          <Stack gap={"xs"}>
            <Box pb={10}>
              <Flex gap={"xs"} align={"center"} justify={"space-between"}>
                <Box>
                  <Text fw={800} fz={"lg"}>REGIONAL STRONGHOLD</Text>
                  <Text fz={"sm"}>Analisis Kawasan Pengaruh Politik</Text>
                </Box>
                <Box>
                  <Flex gap={"xs"} align={"center"}>
                    <Box>
                      <Select
                        placeholder="Pick value"
                        data={['Seluruh Malaysia', 'Semenanjung', 'Sabah', 'Sarawak']}
                        defaultValue="Seluruh Malaysia"
                        styles={{ input: { backgroundColor: "white", color: "black" } }}
                      />
                    </Box>
                    <Text fz={"sm"}>Last Updated: 22 Nov 2024</Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box pb={10}>
              <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 4 }}>
                <Box>
                  <Paper withBorder style={{ borderColor: "#00A133FF" }} radius={"sm"} w={rem(240)} bg={WARNA.bgMain} p={10}>
                    <Text fz={"sm"} mb={5}>Traditional Stronghold</Text>
                    <Text fz={"lg"} fw={"bold"}>85</Text>
                    <Text fz={"xs"} c={"#00A133FF"}>38.3% kerusi</Text>
                  </Paper>
                </Box>
                <Box>
                  <Paper withBorder style={{ borderColor: "#DD9207FF" }} radius={"sm"} w={rem(240)} bg={WARNA.bgMain} p={10}>
                    <Text fz={"sm"} mb={5}>Swing Areas</Text>
                    <Text fz={"lg"} fw={"bold"}>65</Text>
                    <Text fz={"xs"} c={"#DD9207FF"}>29.3% kerusi</Text>
                  </Paper>
                </Box>
                <Box>
                  <Paper withBorder style={{ borderColor: "#3A80F6" }} radius={"sm"} w={rem(240)} bg={WARNA.bgMain} p={10}>
                    <Text fz={"sm"} mb={5}>New Battleground</Text>
                    <Text fz={"lg"} fw={"bold"}>42</Text>
                    <Text fz={"xs"} c={"#3A80F6"}>18.9% kerusi</Text>
                  </Paper>
                </Box>
                <Box>
                  <Paper withBorder style={{ borderColor: "#9744EFFF" }} radius={"sm"} w={rem(240)} bg={WARNA.bgMain} p={10}>
                    <Text fz={"sm"} mb={5}>Mixed Constituency</Text>
                    <Text fz={"lg"} fw={"bold"}>22</Text>
                    <Text fz={"xs"} c={"#9744EFFF"}>9.9% kerusi</Text>
                  </Paper>
                </Box>
                <Box>
                  <Paper withBorder style={{ borderColor: "#EF4444" }} radius={"sm"} w={rem(240)} bg={WARNA.bgMain} p={10}>
                    <Text fz={"sm"} mb={5}>Kawasan Berisiko</Text>
                    <Text fz={"lg"} fw={"bold"}>86</Text>
                    <Text fz={"xs"} c={"#EF4444"}>39% dari jumlah</Text>
                  </Paper>
                </Box>
              </SimpleGrid>
            </Box>
            <Box>
              <Flex gap={"md"}>
                <Box>
                  <Box pb={15}>
                    <Paper h={"57vh"} w={rem(600)} bg={WARNA.bgNavbar} p={20}>
                      <Box>
                        <Text fz={"sm"} fw={"bold"}>Peta Sentiment Nasional</Text>
                        <Box pt={10}>
                          <Stack justify='center' align='center'>
                            <Image radius={"lg"} src={"assets/image/Malaysiani.jpeg"} alt='' w={580} />
                          </Stack>
                        </Box>
                      </Box>
                    </Paper>
                  </Box>
                </Box>
                <Box>
                  <Paper h={"27vh"} w={rem(400)} bg={WARNA.bgNavbar} p={20}>
                    <Text fz={"xl"} fw={"bold"}>Total Kerusi: 222</Text>
                    <Box pt={15}>
                      <Stack>
                        <Flex justify={"space-between"} align={"center"}>
                          <Box>
                            <Text c={"#A1A1A1FF"} fz={"sm"}>Semenanjung</Text>
                          </Box>
                          <Text fw={"bold"} fz={"lg"}>165</Text>
                        </Flex>
                        <Flex justify={"space-between"} align={"center"}>
                          <Box>
                            <Text c={"#A1A1A1FF"} fz={"sm"}>Sabah</Text>
                          </Box>
                          <Text fw={"bold"} fz={"lg"}>25</Text>
                        </Flex>
                        <Flex justify={"space-between"} align={"center"}>
                          <Box>
                            <Text c={"#A1A1A1FF"} fz={"sm"}>Serawak</Text>
                          </Box>
                          <Text fw={"bold"} fz={"lg"}>32</Text>
                        </Flex>

                      </Stack>
                    </Box>
                  </Paper>
                  <Box pt={15}>
                    <Paper h={"28vh"} w={rem(400)} bg={WARNA.bgNavbar} p={20}>
                      <Text fz={"xl"} fw={"bold"}>Margin Kemenangan</Text>
                      <Box pt={15}>
                        <Stack>
                          <Flex justify={"space-between"} align={"center"}>
                            <Box>
                              <Text c={"#A1A1A1FF"} fz={"sm"}>Safe ({'>'}15%)</Text>
                            </Box>
                            <Text fw={"bold"} fz={"lg"} c={"green"}>85</Text>
                          </Flex>
                          <Flex justify={"space-between"} align={"center"}>
                            <Box>
                              <Text c={"#A1A1A1FF"} fz={"sm"}>Moderate (5-15%)</Text>
                            </Box>
                            <Text fw={"bold"} c={"orange"} fz={"lg"}>92</Text>
                          </Flex>
                          <Flex justify={"space-between"} align={"center"}>
                            <Box>
                              <Text c={"#A1A1A1FF"} fz={"sm"}>Marginal ({'<'}5%)</Text>
                            </Box>
                            <Text fw={"bold"} fz={"lg"} c={"red"}>45</Text>
                          </Flex>
                        </Stack>
                      </Box>
                    </Paper>
                  </Box>
                </Box>
              </Flex>
            </Box>
            <Box>
              <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 5 }}>
                <Box>
                  <Paper radius={"sm"} w={rem(180)} bg={WARNA.bgNavbar} p={10}>
                    <Text c={"green"} fw={"bold"} fz={"sm"} mb={5}>Traditional Stronghold</Text>
                    <Paper radius={"sm"} bg={"#FFFFFF16"} p={10}>
                      <Text fz={"sm"} fw={"bold"}>Pantai Timur</Text>
                      <Text fz={"xs"} >PN Dominan</Text>
                    </Paper>
                    <Paper mt={10} radius={"sm"} bg={"#FFFFFF16"} p={10}>
                      <Text fz={"sm"} fw={"bold"}>Pantai Timur</Text>
                      <Text fz={"xs"} >PN Dominan</Text>
                    </Paper>
                    <Paper mt={10} radius={"sm"} bg={"#FFFFFF16"} p={10}>
                      <Text fz={"sm"} fw={"bold"}>Pantai Timur</Text>
                      <Text fz={"xs"} >PN Dominan</Text>
                    </Paper>
                  </Paper>
                </Box>
                <Box>
                  <Paper radius={"sm"} w={rem(180)} bg={WARNA.bgNavbar} p={10}>
                    <Text c={"orange"} fw={"bold"} fz={"sm"} mb={5}>Swing Areas</Text>
                    <Paper radius={"sm"} bg={"#FFFFFF16"} p={10}>
                      <Text fz={"sm"} fw={"bold"}>Selatan</Text>
                      <Text fz={"xs"} >PH-PN-BN</Text>
                    </Paper>
                    <Paper mt={10} radius={"sm"} bg={"#FFFFFF16"} p={10}>
                      <Text fz={"sm"} fw={"bold"}>Utara</Text>
                      <Text fz={"xs"} >PH-PN</Text>
                    </Paper>
                    <Paper mt={10} radius={"sm"} bg={"#FFFFFF16"} p={10}>
                      <Text fz={"sm"} fw={"bold"}>Pantai Barat</Text>
                      <Text fz={"xs"} >PH-BN</Text>
                    </Paper>
                  </Paper>
                </Box>
                <Box>
                  <Paper radius={"sm"} w={rem(180)} bg={WARNA.bgNavbar} p={10}>
                    <Text c={"blue"} fw={"bold"} fz={"sm"} mb={5}>New Battleground</Text>
                    <Paper radius={"sm"} bg={"#FFFFFF16"} p={10}>
                      <Text fz={"sm"} fw={"bold"}>Semi-Urban</Text>
                      <Text fz={"xs"} >Emerging Areas</Text>
                    </Paper>
                    <Paper mt={10} radius={"sm"} bg={"#FFFFFF16"} p={10}>
                      <Text fz={"sm"} fw={"bold"}>Sabah Interior</Text>
                      <Text fz={"xs"} >Multi-cornered</Text>
                    </Paper>
                    <Paper mt={10} radius={"sm"} bg={"#FFFFFF16"} p={10}>
                      <Text fz={"sm"} fw={"bold"}>Mixed Zones</Text>
                      <Text fz={"xs"} >Dynamic Shift</Text>
                    </Paper>
                  </Paper>
                </Box>
                <Box>
                  <Paper radius={"sm"} w={rem(180)} bg={WARNA.bgNavbar} p={10}>
                    <Text c={"grape"} fw={"bold"} fz={"sm"} mb={5}>Mixed Constituency</Text>
                    <Paper radius={"sm"} bg={"#FFFFFF16"} p={10}>
                      <Text fz={"sm"} fw={"bold"}>Urban-Rural Mix</Text>
                      <Text fz={"xs"} >Demographics</Text>
                    </Paper>
                    <Paper mt={10} radius={"sm"} bg={"#FFFFFF16"} p={10}>
                      <Text fz={"sm"} fw={"bold"}>Multi-Ethnic</Text>
                      <Text fz={"xs"} >Balanced Ratio</Text>
                    </Paper>
                    <Paper mt={10} radius={"sm"} bg={"#FFFFFF16"} p={10}>
                      <Text fz={"sm"} fw={"bold"}>Economic Diversity</Text>
                      <Text fz={"xs"} >Mixed Income</Text>
                    </Paper>
                  </Paper>
                </Box>
                <Box>
                  <Paper radius={"sm"} w={rem(180)} bg={WARNA.bgNavbar} p={10}>
                    <Text c={"red"} fw={"bold"} fz={"sm"} mb={5}>Special Interest</Text>
                    <Paper radius={"sm"} bg={"#FFFFFF16"} p={10}>
                      <Text fz={"sm"} fw={"bold"}>Border Areas</Text>
                      <Text fz={"xs"} >Unique Issues</Text>
                    </Paper>
                    <Paper mt={10} radius={"sm"} bg={"#FFFFFF16"} p={10}>
                      <Text fz={"sm"} fw={"bold"}>Development Zones</Text>
                      <Text fz={"xs"} >Economic Focus</Text>
                    </Paper>
                    <Paper mt={10} radius={"sm"} bg={"#FFFFFF16"} p={10}>
                      <Text fz={"sm"} fw={"bold"}>Strategic Areas</Text>
                      <Text fz={"xs"} >Key Projects</Text>
                    </Paper>
                  </Paper>
                </Box>
              </SimpleGrid>
            </Box>
          </Stack >
        </Box >
      </LayoutBg >
    </Box >
  );
}

export default Content;

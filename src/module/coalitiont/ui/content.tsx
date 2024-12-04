'use client'
import { LayoutBg, WARNA } from '@/module/_global';
import { BarChart } from '@mantine/charts';
import { Box, Button, Flex, Paper, Progress, rem, SimpleGrid, Stack, Text } from '@mantine/core';
import { FaArrowDown, FaArrowRight, FaArrowUp } from 'react-icons/fa6';

const data = [
  { koalisi: 'Pakatan Harapan', Kerusi: 82, Sentiment: 3.2 },
  { koalisi: 'Barisan Nasional', Kerusi: 30, Sentiment: 0.5 },
  { koalisi: 'Perikatan Nasional', Kerusi: 74, Sentiment: 1.8 },
  { koalisi: 'GPS/GRS', Kerusi: 28, Sentiment: 1.2 },
  { koalisi: 'Independent', Kerusi: 8, Sentiment: 0.1 },

];

function Content() {
  return (
    <Box>
      <LayoutBg>
        <Box p={20}>
          <Stack gap={"xs"}>
            <Box pb={10}>
              <Flex gap={"xs"} align={"center"} justify={"space-between"}>
                <Box>
                  <Text fw={800} fz={"lg"}>COALITION TRACKING</Text>
                  <Text fz={"sm"}>Analisis Prestasi Gabungan Politik</Text>
                </Box>
                <Box>
                  <Flex gap={"xs"}>
                    <Button>Today</Button>
                    <Button>Week</Button>
                    <Button>Month</Button>
                    <Button>Custom</Button>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box pb={10}>
              <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 4 }}>
                <Box>
                  <Paper withBorder style={{ borderColor: "#6367F0" }} radius={"sm"} w={rem(240)} bg={WARNA.bgMain} p={10}>
                    <Text fw={"bold"} c={"#6367F0"} fz={"sm"} mb={5}>Pakatan Harapan</Text>
                    <Text fz={"h2"} fw={"bold"}>82</Text>
                    <Text mb={5} c={"#6367F0"} fz={"sm"}>Kerusi Parlimen</Text>
                    <Flex gap={3} align={"center"}>
                      <FaArrowUp size={10} color='#00A133FF' />
                      <Text fz={"xs"} c={"#00A133FF"}>3.2% sentiment</Text>
                    </Flex>
                  </Paper>
                </Box>
                <Box>
                  <Paper withBorder style={{ borderColor: "#3B80F7" }} radius={"sm"} w={rem(240)} bg={WARNA.bgMain} p={10}>
                    <Text fw={"bold"} c={"#3B80F7"} fz={"sm"} mb={5}>Barisan Nasional</Text>
                    <Text fz={"h2"} fw={"bold"}>30</Text>
                    <Text mb={5} c={"#3B80F7"} fz={"sm"}>Kerusi Parlimen</Text>
                    <Flex gap={3} align={"center"}>
                      <FaArrowRight size={10} color='#F59E0B' />
                      <Text fz={"xs"} c={"#F59E0B"}>0.5% sentiment</Text>
                    </Flex>
                  </Paper>
                </Box>
                <Box>
                  <Paper withBorder style={{ borderColor: "#34D399" }} radius={"sm"} w={rem(240)} bg={WARNA.bgMain} p={10}>
                    <Text fw={"bold"} c={"#34D399"} fz={"sm"} mb={5}>Perikatan Nasional</Text>
                    <Text fz={"h2"} fw={"bold"}>74</Text>
                    <Text mb={5} c={"#34D399"} fz={"sm"}>Kerusi Parlimen</Text>
                    <Flex gap={3} align={"center"}>
                      <FaArrowDown size={10} color='#EF4545' />
                      <Text fz={"xs"} c={"#EF4545"}>1.8% sentiment</Text>
                    </Flex>
                  </Paper>
                </Box>
                <Box>
                  <Paper withBorder style={{ borderColor: "#F59E0B" }} radius={"sm"} w={rem(240)} bg={WARNA.bgMain} p={10}>
                    <Text fw={"bold"} c={"#FBBF25"} fz={"sm"} mb={5}>GPS/GRS</Text>
                    <Text fz={"h2"} fw={"bold"}>28</Text>
                    <Text mb={5} c={"#FBBF25"} fz={"sm"}>Kerusi Parlimen</Text>
                    <Flex gap={3} align={"center"}>
                      <FaArrowUp size={10} color='#11B880' />
                      <Text fz={"xs"} c={"#11B880"}>1.2% sentiment</Text>
                    </Flex>
                  </Paper>
                </Box>
                <Box>
                  <Paper withBorder style={{ borderColor: "#6A7381" }} radius={"sm"} w={rem(240)} bg={WARNA.bgMain} p={10}>
                    <Text fw={"bold"} c={"#9BA3AF"} fz={"sm"} mb={5}>Independent</Text>
                    <Text fz={"h2"} fw={"bold"}>8</Text>
                    <Text mb={5} c={"#9BA3AF"} fz={"sm"}>Kerusi Parlimen</Text>
                    <Flex gap={3} align={"center"}>
                      <FaArrowRight size={10} color='#6A7381' />
                      <Text fz={"xs"} c={"#6A7381"}>0.1% sentiment</Text>
                    </Flex>
                  </Paper>
                </Box>
              </SimpleGrid>
            </Box>
            <Box>
              <Flex gap={"md"}>
                <Box>
                  <Box pb={15}>
                    <Paper h={"50vh"} w={rem(600)} bg={WARNA.bgNavbar} p={20}>
                      <Box>
                        <Text fz={"sm"} fw={"bold"}>Trend Prestasi Gabungan</Text>
                        <Box p={10}>
                          <BarChart h={300}
                            data={data}
                            dataKey="koalisi"
                            type="stacked"
                            series={[
                              { name: 'Kerusi', color: 'violet.6' },
                              { name: 'Sentiment', color: 'blue.6' }
                            ]}
                          />
                        </Box>
                      </Box>
                    </Paper>
                  </Box>
                  <Box pb={15}>
                    <Paper h={"28vh"} w={rem(600)} bg={WARNA.bgNavbar} p={20}>
                      <Text pb={10} fz={"sm"} fw={"bold"}>Kekuatan Wilayah</Text>
                      <SimpleGrid
                        cols={{ base: 1, sm: 2, lg: 3 }}>
                        <Box>
                          <Stack>
                            <Box>
                              <Text py={5} fz={"sm"}>Semenanjung</Text>
                              <Flex justify={"space-between"}>
                                <Text c={"#818CF8"} fz={"sm"}>PH</Text>
                                <Text fz={"sm"}>45%</Text>
                              </Flex>
                            </Box>
                            <Box>
                              <Flex justify={"space-between"}>
                                <Text c={"#5EA4F9"} fz={"sm"}>BN</Text>
                                <Text fz={"sm"}>15%</Text>
                              </Flex>
                            </Box>
                            <Box>
                              <Flex justify={"space-between"}>
                                <Text c={"#30A17B"} fz={"sm"}>PN</Text>
                                <Text fz={"sm"}>40%</Text>
                              </Flex>
                            </Box>
                          </Stack>
                        </Box>
                        <Box>
                          <Stack>
                            <Box>
                              <Text py={5} fz={"sm"}>Sabah</Text>
                              <Flex justify={"space-between"}>
                                <Text c={"#818CF8"} fz={"sm"}>PH</Text>
                                <Text fz={"sm"}>30%</Text>
                              </Flex>
                            </Box>
                            <Box>
                              <Flex justify={"space-between"}>
                                <Text c={"#F4B926"} fz={"sm"}>GRS</Text>
                                <Text fz={"sm"}>65%</Text>
                              </Flex>
                            </Box>
                            <Box>
                              <Flex justify={"space-between"}>
                                <Text c={"#30A17B"} fz={"sm"}>PN</Text>
                                <Text fz={"sm"}>5%</Text>
                              </Flex>
                            </Box>

                          </Stack>
                        </Box>
                        <Box>
                          <Stack>
                            <Box>
                              <Text py={5} fz={"sm"}>Sabah</Text>
                              <Flex justify={"space-between"}>
                                <Text c={"#FBBF25"} fz={"sm"}>GPS</Text>
                                <Text fz={"sm"}>85%</Text>
                              </Flex>
                            </Box>
                            <Box>
                              <Flex justify={"space-between"}>
                                <Text c={"#818CF8"} fz={"sm"}>PH</Text>
                                <Text fz={"sm"}>10%</Text>
                              </Flex>
                            </Box>
                            <Box>
                              <Flex justify={"space-between"}>
                                <Text c={"#30A17B"} fz={"sm"}>PN</Text>
                                <Text fz={"sm"}>5%</Text>
                              </Flex>
                            </Box>

                          </Stack>
                        </Box>
                      </SimpleGrid>
                    </Paper>
                  </Box>
                </Box>
                <Box>
                  <Paper h={"30vh"} w={rem(400)} bg={WARNA.bgNavbar} p={20}>
                    <Text fz={"xl"} fw={"bold"}>Corak Pengundian</Text>
                    <Box pt={15}>
                      <Stack>
                        <Box>
                          <Flex pb={5} justify={"space-between"} align={"center"}>
                            <Text c={"#A1A1A1FF"} fz={"sm"}>Urban</Text>
                            <Text c={"#818CF8"} fz={"sm"}>PH Dominan</Text>
                          </Flex>
                          <Progress color="#818CF8" value={70} />
                        </Box>
                        <Box>
                          <Flex pb={5} justify={"space-between"} align={"center"}>
                            <Text c={"#A1A1A1FF"} fz={"sm"}>Semi-Urban</Text>
                            <Text c={"#11B880"} fz={"sm"}>PN/BN Split</Text>
                          </Flex>
                          <Progress color="#11B880" value={45} />
                        </Box>
                        <Box>
                          <Flex pb={5} justify={"space-between"} align={"center"}>
                            <Text c={"#A1A1A1FF"} fz={"sm"}>Rural</Text>
                            <Text c={"#11B880"} fz={"sm"}>PN Dominan</Text>
                          </Flex>
                          <Progress color="#11B880" value={60} />
                        </Box>
                      </Stack>
                    </Box>
                  </Paper>
                  <Box pt={15}>
                    <Paper h={"50vh"} w={rem(400)} bg={WARNA.bgNavbar} p={20}>
                      <Text fz={"xl"} fw={"bold"}>Sokongan Demografi</Text>
                      <Box pt={15}>
                        <Stack>
                          <Box>
                            <Paper p={10} bg={"#364051"} >
                            <Text fw={"bold"} c={"#7985E7"} fz={"sm"}>Pakatan Harapan</Text>
                            <Text fz={"xs"}>Urban, Multi-racial, Youth</Text>
                            </Paper>
                          </Box>
                          <Box>
                            <Paper p={10} bg={"#364051"} >
                            <Text fw={"bold"} c={"#5EA4F9"} fz={"sm"}>Barisan Nasional</Text>
                            <Text fz={"xs"}>Mixed, Traditional Base</Text>
                            </Paper>
                          </Box>
                          <Box>
                            <Paper p={10} bg={"#364051"} >
                            <Text fw={"bold"} c={"#34D399"} fz={"sm"}>Perikatan Nasional</Text>
                            <Text fz={"xs"}>Rural, Conservative</Text>
                            </Paper>
                          </Box>
                          <Box>
                            <Paper p={10} bg={"#364051"} >
                            <Text fw={"bold"} c={"#FBBF25"} fz={"sm"}>GPS/GRS</Text>
                            <Text fz={"xs"}>Regional, State-based</Text>
                            </Paper>
                          </Box>
                        </Stack>
                      </Box>
                    </Paper>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Stack >
        </Box >
      </LayoutBg >
    </Box >
  );
}

export default Content;

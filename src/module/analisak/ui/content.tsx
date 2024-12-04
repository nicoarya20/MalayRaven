'use client'
import { LayoutBg, WARNA } from '@/module/_global';
import { Box, Flex, Paper, Progress, rem, Select, SimpleGrid, Stack, Text } from '@mantine/core';
import { FaArrowUp } from 'react-icons/fa6';

function Content() {
  return (
    <Box>
      <LayoutBg>
        <Box p={20}>
          <Stack gap={"xs"}>
            <Box pb={10}>
              <Flex gap={"xs"} align={"center"} justify={"space-between"}>
                <Box>
                  <Text fw={800} fz={"lg"}>ANALISIS KAWASAN</Text>
                  <Text fz={"sm"}>Analisis Menyeluruh Kawasan Pilihan Raya</Text>
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
                    <Text fz={"sm"}>22 November 2024</Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box pb={10}>
              <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 4 }}>
                <Box>
                  <Paper radius={"sm"} w={rem(240)} bg={WARNA.bgNavbar} p={10}>
                    <Text fz={"sm"} mb={5}>Jumlah Parlimen</Text>
                    <Text fz={"lg"} fw={"bold"}>222</Text>
                    <Text fz={"xs"} c={"#3A7CED"}>Seluruh Malaysia</Text>
                  </Paper>
                </Box>
                <Box>
                  <Paper radius={"sm"} w={rem(240)} bg={WARNA.bgNavbar} p={10}>
                    <Text fz={"sm"} mb={5}>Jumlah DUN</Text>
                    <Text fz={"lg"} fw={"bold"}>587</Text>
                    <Text fz={"xs"} c={"#16B17D"}>13 Negeri + WP</Text>
                  </Paper>
                </Box>
                <Box>
                  <Paper radius={"sm"} w={rem(240)} bg={WARNA.bgNavbar} p={10}>
                    <Text fz={"sm"} mb={5}>Jumlah Pengundi</Text>
                    <Text fz={"lg"} fw={"bold"}>21.2M</Text>
                    <Flex gap={2} align={"center"}>
                      <FaArrowUp size={10} color={"#F59E0B"} />
                      <Text fz={"xs"} c={"#F59E0B"}>2.1% PRU-15</Text>
                    </Flex>
                  </Paper>
                </Box>
                <Box>
                  <Paper radius={"sm"} w={rem(240)} bg={WARNA.bgNavbar} p={10}>
                    <Text fz={"sm"} mb={5}>Jangkaan Turnout</Text>
                    <Text fz={"lg"} fw={"bold"}>82%</Text>
                    <Text fz={"xs"} c={"#8B5DF7"}>Analisis AI</Text>
                  </Paper>
                </Box>
              </SimpleGrid>
            </Box>
            <Box>
              <Flex gap={"md"}>
                <Box>
                  <Box pb={15}>
                    <Paper h={"47vh"} w={rem(500)} bg={WARNA.bgNavbar} p={20}>
                      <Text fz={"lg"} fw={"bold"}>Parlimen Level Analysis</Text>
                      <Text py={10} fz={"sm"}>Status Kerusi</Text>
                      <Box>
                        <SimpleGrid
                          cols={{ base: 1, sm: 2, lg: 3 }}>
                          <Box>
                            <Paper h={rem(60)} bg={"#DDDDDD16"} p={10}>
                              <Text c={"#11B880"} fw={"bold"} fz={"sm"}>85</Text>
                              <Text fz={"sm"}>Selamat</Text>
                            </Paper>
                          </Box>
                          <Box>
                            <Paper h={rem(60)} bg={"#DDDDDD16"} p={10}>
                              <Text c={"#F59E0B"} fw={"bold"} fz={"sm"}>92</Text>
                              <Text fz={"sm"}>Marginal</Text>
                            </Paper>
                          </Box>
                          <Box>
                            <Paper h={rem(60)} bg={"#DDDDDD16"} p={10}>
                              <Text c={"#CC4548"} fw={"bold"} fz={"sm"}>45</Text>
                              <Text fz={"sm"}>Berisiko</Text>
                            </Paper>
                          </Box>
                        </SimpleGrid>
                      </Box>
                      <Box>
                        <Text fz={"sm"} py={10}>Taburan Wilayah</Text>
                        <Box>
                          <Box>
                            <Flex pb={5} justify={"space-between"} align={"center"}>
                              <Text fw={"bold"} fz={"sm"}>Semenanjung</Text>
                              <Text fw={"bold"} fz={"sm"}>165</Text>
                            </Flex>
                            <Box pl={350}>
                              <Progress color={"#1162B8FF"} value={85} />
                            </Box>
                          </Box>
                          <Box pt={10}>
                            <Flex pb={5} justify={"space-between"} align={"center"}>
                              <Text fw={"bold"} fz={"sm"}>Sabah</Text>
                              <Text fw={"bold"} fz={"sm"}>25</Text>
                            </Flex>
                            <Box pl={350}>
                              <Progress color={"#11B880"} value={10} />
                            </Box>
                          </Box>
                          <Box pt={10}>
                            <Flex pb={5} justify={"space-between"} align={"center"}>
                              <Text fw={"bold"} fz={"sm"}>Sarawak</Text>
                              <Text fw={"bold"} fz={"sm"}>32</Text>
                            </Flex>
                            <Box pl={350}>
                              <Progress color={"#B87011FF"} value={25} />
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Paper>
                  </Box>
                </Box>
                <Box pb={15}>
                  <Paper h={"47vh"} w={rem(500)} bg={WARNA.bgNavbar} p={20}>
                    <Text fz={"lg"} fw={"bold"}>DUN Level Analysis</Text>
                    <Text py={10} fz={"sm"}>Status DUN</Text>
                    <Box>
                      <SimpleGrid
                        cols={{ base: 1, sm: 2, lg: 3 }}>
                        <Box>
                          <Paper h={rem(60)} bg={"#DDDDDD16"} p={10}>
                            <Text c={"#11B880"} fw={"bold"} fz={"sm"}>245</Text>
                            <Text fz={"sm"}>Selamat</Text>
                          </Paper>
                        </Box>
                        <Box>
                          <Paper h={rem(60)} bg={"#DDDDDD16"} p={10}>
                            <Text c={"#F59E0B"} fw={"bold"} fz={"sm"}>212</Text>
                            <Text fz={"sm"}>Marginal</Text>
                          </Paper>
                        </Box>
                        <Box>
                          <Paper h={rem(60)} bg={"#DDDDDD16"} p={10}>
                            <Text c={"#CC4548"} fw={"bold"} fz={"sm"}>130</Text>
                            <Text fz={"sm"}>Berisiko</Text>
                          </Paper>
                        </Box>
                      </SimpleGrid>
                    </Box>
                    <Box>
                      <Text fz={"sm"} py={10}>Top 5 Negeri (Jumlah DUN)</Text>
                      <Box>
                        <Box>
                          <Flex pb={5} justify={"space-between"} align={"center"}>
                            <Text fw={"bold"} fz={"sm"}>Sarawak</Text>
                            <Text fw={"bold"} fz={"sm"}>82</Text>
                          </Flex>
                          <Box pl={350}>
                            <Progress color={"#1162B8FF"} value={85} />
                          </Box>
                        </Box>
                        <Box pt={10}>
                          <Flex pb={5} justify={"space-between"} align={"center"}>
                            <Text fw={"bold"} fz={"sm"}>Sabah</Text>
                            <Text fw={"bold"} fz={"sm"}>73</Text>
                          </Flex>
                          <Box pl={350}>
                            <Progress color={"#11B880"} value={73} />
                          </Box>
                        </Box>
                        <Box pt={10}>
                          <Flex pb={5} justify={"space-between"} align={"center"}>
                            <Text fw={"bold"} fz={"sm"}>Johor</Text>
                            <Text fw={"bold"} fz={"sm"}>56</Text>
                          </Flex>
                          <Box pl={350}>
                            <Progress color={"#B87011FF"} value={56} />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Flex gap={"md"}>
                <Box>
                  <Box pb={15}>
                    <Paper h={"34vh"} w={rem(500)} bg={WARNA.bgNavbar} p={20}>
                      <Text fz={"lg"} fw={"bold"}>Pengundi Muda & Kali Pertama</Text>
                      <Box>
                        <Flex gap={"lg"}>
                          <Box>
                            <Text py={10}>Pengundi Muda(18-25)</Text>
                            <Paper w={rem(220)} bg={"#CECDCD2B"} p={10}>
                              <Text fw={"bold"} fz={"lg"} c={"#3B80F7"}>5.8M</Text>
                              <Text fz={"sm"}>27.4% Jumlah Pengundi</Text>
                            </Paper>
                            <Box py={10}>
                              <Flex justify={"space-between"} align={"center"}>
                                <Text fz={"sm"}>Urban</Text>
                                <Text c={"#11B880"} fz={"sm"}>62%</Text>
                              </Flex>
                            </Box>
                            <Box>
                              <Flex justify={"space-between"} align={"center"}>
                                <Text fz={"sm"}>Rural</Text>
                                <Text c={"#F59E0B"} fz={"sm"}>38%</Text>
                              </Flex>
                            </Box>
                          </Box>
                          <Box>
                            <Text py={10}>Pengundi Kali Pertama</Text>
                            <Paper w={rem(220)} bg={"#CECDCD2B"} p={10}>
                              <Text fw={"bold"} fz={"lg"} c={"#11B880"}>4.2M</Text>
                              <Text fz={"sm"}>27.4% Jumlah Pengundi</Text>
                            </Paper>
                            <Box py={10}>
                              <Flex justify={"space-between"} align={"center"}>
                                <Text fz={"sm"}>18-21</Text>
                                <Text c={"#3B80F7"} fz={"sm"}>45%</Text>
                              </Flex>
                            </Box>
                            <Box>
                              <Flex justify={"space-between"} align={"center"}>
                                <Text fz={"sm"}>{'>'}21</Text>
                                <Text c={"#8B5DF7"} fz={"sm"}>55%</Text>
                              </Flex>
                            </Box>
                          </Box>
                        </Flex>
                      </Box>
                    </Paper>
                  </Box>
                </Box>
                <Box>
                  <Box pb={15}>
                    <Paper h={"34vh"} w={rem(500)} bg={WARNA.bgNavbar} p={20}>
                      <Text fz={"lg"} fw={"bold"}>Pengundi Atas 60 & Luar Kawasan</Text>
                      <Box>
                        <Flex gap={"lg"}>
                          <Box>
                            <Text py={10}>Pengundi Atas 60</Text>
                            <Paper w={rem(220)} bg={"#CECDCD2B"} p={10}>
                              <Text fw={"bold"} fz={"lg"} c={"#F59E0B"}>2.5M</Text>
                              <Text fz={"sm"}>11.6% Jumlah Pengundi</Text>
                            </Paper>
                            <Box py={10}>
                              <Flex justify={"space-between"} align={"center"}>
                                <Text fz={"sm"}>Urban</Text>
                                <Text c={"#11B880"} fz={"sm"}>45%</Text>
                              </Flex>
                            </Box>
                            <Box>
                              <Flex justify={"space-between"} align={"center"}>
                                <Text fz={"sm"}>Rural</Text>
                                <Text c={"#F59E0B"} fz={"sm"}>55%</Text>
                              </Flex>
                            </Box>
                          </Box>
                          <Box>
                            <Text py={10}>Pengundi Luar Kawasan</Text>
                            <Paper w={rem(220)} bg={"#CECDCD2B"} p={10}>
                              <Text fw={"bold"} fz={"lg"} c={"#8B5DF7"}>3.1M</Text>
                              <Text fz={"sm"}>14.6% Jumlah Pengundi</Text>
                            </Paper>
                            <Box py={10}>
                              <Flex justify={"space-between"} align={"center"}>
                                <Text fz={"sm"}>Dalam Negeri</Text>
                                <Text c={"#3B80F7"} fz={"sm"}>85%</Text>
                              </Flex>
                            </Box>
                            <Box>
                              <Flex justify={"space-between"} align={"center"}>
                                <Text fz={"sm"}>Luar Negeri</Text>
                                <Text c={"#EF4545"} fz={"sm"}>15%</Text>
                              </Flex>
                            </Box>
                          </Box>
                        </Flex>
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

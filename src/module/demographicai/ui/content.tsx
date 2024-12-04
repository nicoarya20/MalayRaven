'use client'
import { LayoutBg, WARNA } from '@/module/_global';
import { Box, Flex, Image, Paper, Progress, rem, Select, SimpleGrid, Stack, Text } from '@mantine/core';
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
                  <Text fw={800} fz={"lg"}>DEMOGRAPHIC AI</Text>
                  <Text fz={"sm"}>Analisis Demografi Pengundi Malaysia</Text>
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
                    <Text fz={"sm"}>22 November 2024 14:31 GMT+8</Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box pb={10}>
              <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 4 }}>
                <Box>
                  <Paper radius={"sm"} w={rem(240)} bg={WARNA.bgNavbar} p={10}>
                    <Text fz={"sm"} mb={5}>Jumlah Pengundi</Text>
                    <Text fz={"lg"} fw={"bold"}>21.2M</Text>
                    <Flex gap={3} align={"center"}>
                      <FaArrowUp size={10} color={"#18AD7A"} />
                      <Text fz={"xs"} c={"#18AD7A"}>2.1% dari PRU-15</Text>
                    </Flex>
                  </Paper>
                </Box>
                <Box>
                  <Paper radius={"sm"} w={rem(240)} bg={WARNA.bgNavbar} p={10}>
                    <Text fz={"sm"} mb={5}>Pengundi Muda {('18-25 tahun')}</Text>
                    <Text fz={"lg"} fw={"bold"}>5.8M</Text>
                    <Text fz={"xs"} c={"#3B80F7"}>27.4% dari jumlah</Text>
                  </Paper>
                </Box>
                <Box>
                  <Paper radius={"sm"} w={rem(240)} bg={WARNA.bgNavbar} p={10}>
                    <Text fz={"sm"} mb={5}>Urban/Rural Ratio</Text>
                    <Text fz={"lg"} fw={"bold"}>65:35</Text>
                    <Flex gap={3} align={"center"}>
                      <Text fz={"xs"} c={"#C98422"}>Trend Urbanisasi</Text>
                      <FaArrowUp size={10} color={"#C98422"} />
                    </Flex>
                  </Paper>
                </Box>
                <Box>
                  <Paper radius={"sm"} w={rem(240)} bg={WARNA.bgNavbar} p={10}>
                    <Text fz={"sm"} mb={5}>Jangkaan Tornout</Text>
                    <Text fz={"lg"} fw={"bold"}>82%</Text>
                    <Text fz={"xs"} c={"#8B5CF6"}>Berdasarkan AI</Text>
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
                        <Text fz={"md"} fw={"bold"}>Taburan Demografi</Text>
                        <Box pt={10}>
                          <Stack justify='center' align='center'>
                            <Image radius={"lg"} src={"assets/image/Malaysiani.jpeg"} alt='' w={580} />
                          </Stack>
                        </Box>
                      </Box>
                    </Paper>
                  </Box>
                  <Box>
                    <Flex gap={"lg"}>
                      <Box pt={15}>
                        <Paper h={"36vh"} w={rem(290)} bg={WARNA.bgNavbar} p={20}>
                          <Text fz={"md"} fw={"bold"}>Taburan Umur</Text>
                          <Box pt={15}>
                            <Stack>
                              <Box>
                                <Flex justify={"space-between"} align={"center"}>
                                  <Box>
                                    <Text c={"#A1A1A1FF"} fz={"sm"}>18-25 tahun</Text>
                                  </Box>
                                  <Text fw={"bold"} fz={"sm"}>27.4%</Text>
                                </Flex>
                                <Box pt={5}>
                                  <Progress value={27.4} color={"#3B80F7"} size={"sm"} />
                                </Box>
                              </Box>
                              <Box pt={5}>
                                <Flex justify={"space-between"} align={"center"}>
                                  <Box>
                                    <Text c={"#A1A1A1FF"} fz={"sm"}>26-40 tahun</Text>
                                  </Box>
                                  <Text fw={"bold"} fz={"sm"}>35.2%</Text>
                                </Flex>
                                <Box pt={5}>
                                  <Progress value={35.2} color={"#11B880"} size={"sm"} />
                                </Box>
                              </Box>
                              <Box pt={5}>
                                <Flex justify={"space-between"} align={"center"}>
                                  <Box>
                                    <Text c={"#A1A1A1FF"} fz={"sm"}>41-60 tahun</Text>
                                  </Box>
                                  <Text fw={"bold"} fz={"sm"}>25.8%</Text>
                                </Flex>
                                <Box pt={5}>
                                  <Progress value={25.8} color={"#F59E0B"} size={"sm"} />
                                </Box>
                              </Box>
                              <Box pt={5}>
                                <Flex justify={"space-between"} align={"center"}>
                                  <Box>
                                    <Text c={"#A1A1A1FF"} fz={"sm"}>{'>'}60 tahun</Text>
                                  </Box>
                                  <Text fw={"bold"} fz={"sm"}>11.6%</Text>
                                </Flex>
                                <Box pt={5}>
                                  <Progress value={11.6} color={"#EF4545"} size={"sm"} />
                                </Box>
                              </Box>
                            </Stack>
                          </Box>
                        </Paper>
                      </Box>
                      <Box pt={15}>
                        <Paper h={"36vh"} w={rem(290)} bg={WARNA.bgNavbar} p={20}>
                          <Text fz={"md"} fw={"bold"}>Taburan Kaum</Text>
                          <Box pt={15}>
                            <Stack>
                              <Box>
                                <Flex justify={"space-between"} align={"center"}>
                                  <Box>
                                    <Text c={"#A1A1A1FF"} fz={"sm"}>Melayu</Text>
                                  </Box>
                                  <Text fw={"bold"} fz={"sm"}>50.4%</Text>
                                </Flex>
                                <Box pt={5}>
                                  <Progress value={50.4} color={"#11B880"} size={"sm"} />
                                </Box>
                              </Box>
                              <Box pt={5}>
                                <Flex justify={"space-between"} align={"center"}>
                                  <Box>
                                    <Text c={"#A1A1A1FF"} fz={"sm"}>Cina</Text>
                                  </Box>
                                  <Text fw={"bold"} fz={"sm"}>23.3%</Text>
                                </Flex>
                                <Box pt={5}>
                                  <Progress value={23.2} color={"#3B80F7"} size={"sm"} />
                                </Box>
                              </Box>
                              <Box pt={5}>
                                <Flex justify={"space-between"} align={"center"}>
                                  <Box>
                                    <Text c={"#A1A1A1FF"} fz={"sm"}>India</Text>
                                  </Box>
                                  <Text fw={"bold"} fz={"sm"}>7.1%</Text>
                                </Flex>
                                <Box pt={5}>
                                  <Progress value={7.1} color={"#F59E0B"} size={"sm"} />
                                </Box>
                              </Box>
                              <Box pt={5}>
                                <Flex justify={"space-between"} align={"center"}>
                                  <Box>
                                    <Text c={"#A1A1A1FF"} fz={"sm"}>Bumiputera S/S</Text>
                                  </Box>
                                  <Text fw={"bold"} fz={"sm"}>19.3%</Text>
                                </Flex>
                                <Box pt={5}>
                                  <Progress value={19.3} color={"#8B5CF6"} size={"sm"} />
                                </Box>
                              </Box>

                            </Stack>
                          </Box>
                        </Paper>
                      </Box>
                    </Flex>
                  </Box>
                  <Box pt={15}>
                    <Paper h={"23vh"} w={rem(290)} bg={WARNA.bgNavbar} p={20}>
                      <Text fz={"md"} fw={"bold"}>Taburan Umur</Text>
                      <Box pt={15}>
                        <Stack>
                          <Box>
                            <Flex justify={"space-between"} align={"center"}>
                              <Box>
                                <Text c={"#A1A1A1FF"} fz={"xs"}>Kesedaran Politik</Text>
                              </Box>
                              <Flex align={"center"}>
                                <FaArrowUp size={10} color={"#11B880"} />
                                <Text fw={"bold"} c={"#11B880"} fz={"xs"}>15%</Text>
                              </Flex>
                            </Flex>
                          </Box>
                          <Box>
                            <Flex justify={"space-between"} align={"center"}>
                              <Box>
                                <Text c={"#A1A1A1FF"} fz={"xs"}>Penglibatan Media Sosial</Text>
                              </Box>
                              <Flex align={"center"}>
                                <FaArrowUp size={10} color={"#11B880"} />
                                <Text fw={"bold"} c={"#11B880"} fz={"xs"}>22%</Text>
                              </Flex>
                            </Flex>
                          </Box>
                          <Box>
                            <Flex justify={"space-between"} align={"center"}>
                              <Box>
                                <Text c={"#A1A1A1FF"} fz={"xs"}>Isu Ekonomi</Text>
                              </Box>
                              <Flex align={"center"}>
                                <FaArrowUp size={10} color={"#EF4545"} />
                                <Text fw={"bold"} c={"#EF4545"} fz={"xs"}>35%</Text>
                              </Flex>
                            </Flex>
                          </Box>
                        </Stack>
                      </Box>
                    </Paper>
                  </Box>
                </Box>
                <Box>
                  <Box>
                    <Paper h={"30vh"} w={rem(400)} bg={WARNA.bgNavbar} p={20}>
                      <Text fz={"md"} fw={"bold"}>Taburan Urban/Rural</Text>
                      <Box pt={15}>
                        <Stack>
                          <Box>
                            <Flex justify={"space-between"} align={"center"}>
                              <Box>
                                <Text c={"#A1A1A1FF"} fz={"sm"}>Urban</Text>
                              </Box>
                              <Text fw={"bold"} fz={"sm"}>65%</Text>
                            </Flex>
                            <Box pt={5}>
                              <Progress value={65} color={"#3B80F7"} size={"sm"} />
                            </Box>
                          </Box>
                          <Box pt={5}>
                            <Flex justify={"space-between"} align={"center"}>
                              <Box>
                                <Text c={"#A1A1A1FF"} fz={"sm"}>Semi-Urban</Text>
                              </Box>
                              <Text fw={"bold"} fz={"sm"}>20%</Text>
                            </Flex>
                            <Box pt={5}>
                              <Progress value={20} color={"#11B880"} size={"sm"} />
                            </Box>
                          </Box>
                          <Box pt={5}>
                            <Flex justify={"space-between"} align={"center"}>
                              <Box>
                                <Text c={"#A1A1A1FF"} fz={"sm"}>Rural</Text>
                              </Box>
                              <Text fw={"bold"} fz={"sm"}>15%</Text>
                            </Flex>
                            <Box pt={5}>
                              <Progress value={15} color={"#F59E0B"} size={"sm"} />
                            </Box>
                          </Box>

                        </Stack>
                      </Box>
                    </Paper>
                  </Box>
                  <Box pt={15}>
                    <Paper h={"28vh"} w={rem(400)} bg={WARNA.bgNavbar} p={20}>
                      <Text fz={"md"} fw={"bold"}>Taburan Sosioekonomi</Text>
                      <Box pt={15}>
                        <Stack>
                          <Box>
                            <Flex justify={"space-between"} align={"center"}>
                              <Box>
                                <Text c={"#A1A1A1FF"} fz={"sm"}>B40</Text>
                              </Box>
                              <Text fw={"bold"} fz={"sm"}>45%</Text>
                            </Flex>
                            <Box pt={5}>
                              <Progress value={45} color={"#EF4545"} size={"sm"} />
                            </Box>
                          </Box>
                          <Box pt={5}>
                            <Flex justify={"space-between"} align={"center"}>
                              <Box>
                                <Text c={"#A1A1A1FF"} fz={"sm"}>M40</Text>
                              </Box>
                              <Text fw={"bold"} fz={"sm"}>40%</Text>
                            </Flex>
                            <Box pt={5}>
                              <Progress value={40} color={"#F59E0B"} size={"sm"} />
                            </Box>
                          </Box>
                          <Box pt={5}>
                            <Flex justify={"space-between"} align={"center"}>
                              <Box>
                                <Text c={"#A1A1A1FF"} fz={"sm"}>T20</Text>
                              </Box>
                              <Text fw={"bold"} fz={"sm"}>15%</Text>
                            </Flex>
                            <Box pt={5}>
                              <Progress value={15} color={"#11B880"} size={"sm"} />
                            </Box>
                          </Box>

                        </Stack>
                      </Box>
                    </Paper>
                  </Box>
                  <Box pt={15}>
                    <Paper h={"28vh"} w={rem(400)} bg={WARNA.bgNavbar} p={20}>
                      <Text fz={"md"} fw={"bold"}>Ramalan Tingkah Laku Pengundi</Text>
                      <Box pt={15}>
                        <Stack>
                          <Box>
                            <Flex justify={"space-between"} align={"center"}>
                              <Box>
                                <Text c={"#A1A1A1FF"} fz={"sm"}>Isu Ekonomi</Text>
                              </Box>
                              <Text fw={"bold"} c={"#EF4545"} fz={"sm"}>Kritikal</Text>
                            </Flex>
                            <Box mt={5} pl={250}>
                              <Progress value={85} color={"#EF4545"} size={"sm"} />
                            </Box>
                          </Box>
                          <Box pt={5}>
                            <Flex justify={"space-between"} align={"center"}>
                              <Box>
                                <Text c={"#A1A1A1FF"} fz={"sm"}>Isu Sosial</Text>
                              </Box>
                              <Text fw={"bold"} c={"#F59E0B"} fz={"sm"}>Sederhana</Text>
                            </Flex>
                            <Box mt={5} pl={250}>
                              <Progress value={55} color={"#F59E0B"} size={"sm"} />
                            </Box>
                          </Box>
                          <Box pt={5}>
                            <Flex justify={"space-between"} align={"center"}>
                              <Box>
                                <Text c={"#A1A1A1FF"} fz={"sm"}>Isu Governas</Text>
                              </Box>
                              <Text fw={"bold"} c={"#11B880"} fz={"sm"}>Rendah</Text>
                            </Flex>
                            <Box mt={5} pl={250}>
                              <Progress value={15} color={"#11B880"} size={"sm"} />
                            </Box>
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

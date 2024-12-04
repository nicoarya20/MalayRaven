'use client'
import { LayoutBg, WARNA } from '@/module/_global';
import { Box, Flex, Image, Paper, Progress, rem, Select, Stack, Text } from '@mantine/core';
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
                  <Text fw={800} fz={"lg"}>DEMOGRAPHIC MAPPING</Text>
                  <Text fz={"sm"}>Pemetaan Demografi Malaysia</Text>
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
            <Box>
              <Flex gap={"md"}>
                <Box>
                  <Box pb={15}>
                    <Paper h={"52vh"} w={rem(600)} bg={WARNA.bgNavbar} p={20}>
                      <Box>
                        <Text fz={"sm"} fw={"bold"}>Peta Demografi Interaktif</Text>
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
                  <Paper h={"22vh"} w={rem(400)} bg={WARNA.bgNavbar} p={20}>
                    <Text fz={"xl"} fw={"bold"}>Jumlah Pengundi Berdaftar</Text>
                    <Box pt={10}>
                      <Text fz={"h1"} fw={"bold"}>21.2M</Text>
                      <Flex gap={3} align={"center"}>
                        <FaArrowUp size={12} color='#11B880' />
                        <Text c={"#11B880"} fz={"sm"}>2.1% dari PRU-15</Text>
                      </Flex>
                    </Box>
                  </Paper>
                  <Box pt={15}>
                    <Paper h={"28vh"} w={rem(400)} bg={WARNA.bgNavbar} p={20}>
                      <Text fz={"xl"} fw={"bold"}>Taburan Kawasan</Text>
                      <Box pt={15}>
                        <Stack>
                          <Flex justify={"space-between"} align={"center"}>
                            <Box>
                              <Text c={"#A1A1A1FF"} fz={"sm"}>Urban</Text>
                            </Box>
                            <Text fw={"bold"} fz={"lg"} c={"#3364B7"}>65%</Text>
                          </Flex>
                          <Flex justify={"space-between"} align={"center"}>
                            <Box>
                              <Text c={"#A1A1A1FF"} fz={"sm"}>Semi-Urban</Text>
                            </Box>
                            <Text fw={"bold"} c={"#11B880"} fz={"lg"}>20%</Text>
                          </Flex>
                          <Flex justify={"space-between"} align={"center"}>
                            <Box>
                              <Text c={"#A1A1A1FF"} fz={"sm"}>Rural</Text>
                            </Box>
                            <Text fw={"bold"} fz={"lg"} c={"#F59E0B"}>45%</Text>
                          </Flex>
                        </Stack>
                      </Box>
                    </Paper>
                  </Box>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Flex gap={"md"}>
                <Box>
                  <Box pb={15}>
                    <Paper h={"47vh"} w={rem(500)} bg={WARNA.bgNavbar} p={20}>
                      <Text fz={"lg"} fw={"bold"}>Analisis Kaum</Text>
                      <Box pt={10}>
                        <Box>
                          <Flex pb={5} justify={"space-between"} align={"center"}>
                            <Text fz={"sm"}>Melayu</Text>
                            <Text fw={"bold"} fz={"sm"}>50.4%</Text>
                          </Flex>
                          <Progress color={"#11B880"} value={50.4} />
                        </Box>
                        <Box pt={10}>
                          <Flex pb={5} justify={"space-between"} align={"center"}>
                            <Text fz={"sm"}>Cina</Text>
                            <Text fw={"bold"} fz={"sm"}>23.2%</Text>
                          </Flex>
                          <Progress color={"#3B80F7"} value={23.2} />
                        </Box>
                        <Box pt={10}>
                          <Flex pb={5} justify={"space-between"} align={"center"}>
                            <Text fw={"bold"} fz={"sm"}>India</Text>
                            <Text fw={"bold"} fz={"sm"}>7.1%</Text>
                          </Flex>
                          <Progress color={"#F59E0B"} value={7.1} />6A7381
                        </Box>
                        <Box pt={10}>
                          <Flex pb={5} justify={"space-between"} align={"center"}>
                            <Text fw={"bold"} fz={"sm"}>Bumiputera S/S</Text>
                            <Text fw={"bold"} fz={"sm"}>17.3%</Text>
                          </Flex>
                          <Progress color={"#8B5DF7"} value={17.3} />
                        </Box>
                        <Box pt={10}>
                          <Flex pb={5} justify={"space-between"} align={"center"}>
                            <Text fw={"bold"} fz={"sm"}>Lain-lain</Text>
                            <Text fw={"bold"} fz={"sm"}>2%</Text>
                          </Flex>
                          <Progress color={"#6A7381"} value={2} />
                        </Box>
                      </Box>
                    </Paper>
                  </Box>
                </Box>
                <Box pb={15}>
                  <Paper h={"47vh"} w={rem(500)} bg={WARNA.bgNavbar} p={20}>
                    <Text fz={"lg"} fw={"bold"}>Taburan Urban/Rural</Text>
                    <Box pt={10}>
                      <Flex gap={9}>
                        <Box>
                          <Paper w={rem(215)} bg={"#DDDDDD16"} p={10}>
                            <Text ta={"center"} fz={"h2"} fw={"bold"} c={"#3B80F7"}>65%</Text>
                            <Text fz={"sm"} ta={"center"} >Urban</Text>
                          </Paper>
                          <Box pt={10}>
                            <Paper w={rem(215)} bg={"#DDDDDD16"} p={10}>
                              <Text ta={"center"} fz={"h2"} fw={"bold"} c={"#11B880"}>20%</Text>
                              <Text fz={"sm"} ta={"center"} >Semi-Urban</Text>
                            </Paper>
                          </Box>
                          <Box pt={10}>
                            <Paper w={rem(215)} bg={"#DDDDDD16"} p={10}>
                              <Text ta={"center"} fz={"h2"} fw={"bold"} c={"#F59E0B"}>65%</Text>
                              <Text fz={"sm"} ta={"center"} >Rural</Text>
                            </Paper>
                          </Box>
                        </Box>
                        <Box>
                          <Paper w={rem(230)} bg={"#DDDDDD16"} p={10}>
                            <Text fz={"sm"}>Urban Centers</Text>
                            <Text fw={"bold"}>Klang Valley, Penang, JB</Text>
                          </Paper>
                          <Paper mt={10} w={rem(230)} bg={"#DDDDDD16"} p={10}>
                            <Text fz={"sm"}>Semi-Urban</Text>
                            <Text fw={"bold"}>Secondary Cities</Text>
                          </Paper>
                          <Paper mt={10} w={rem(230)} bg={"#DDDDDD16"} p={10}>
                            <Text fz={"sm"}>Rural Focus</Text>
                            <Text fw={"bold"}>East Coast, Interior</Text>
                          </Paper>
                        </Box>
                      </Flex>
                    </Box>
                  </Paper>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Flex gap={"md"}>
                <Box pb={15}>
                  <Paper h={"34vh"} w={rem(500)} bg={WARNA.bgNavbar} p={20}>
                    <Text fz={"lg"} fw={"bold"}>Taburan Pendapatan</Text>
                    <Box pt={10}>
                      <Box>
                        <Flex pb={5} justify={"space-between"} align={"center"}>
                          <Text fz={"sm"}>B40 ({'<'}RM4,851)</Text>
                          <Text fw={"bold"} fz={"sm"}>45%</Text>
                        </Flex>
                        <Progress color={"#11B880"} value={45} />
                      </Box>
                      <Box pt={10}>
                        <Flex pb={5} justify={"space-between"} align={"center"}>
                          <Text fz={"sm"}>M40 (RM4,851-10,970)</Text>
                          <Text fw={"bold"} fz={"sm"}>23.2%</Text>
                        </Flex>
                        <Progress color={"#3B80F7"} value={23.2} />
                      </Box>
                      <Box pt={10}>
                        <Flex pb={5} justify={"space-between"} align={"center"}>
                          <Text fw={"bold"} fz={"sm"}>T20 ({'>'}RM10,971)</Text>
                          <Text fw={"bold"} fz={"sm"}>15%</Text>
                        </Flex>
                        <Progress color={"#F59E0B"} value={15} />
                      </Box>
                    </Box>
                  </Paper>
                </Box>
                <Box pb={15}>
                  <Paper h={"34vh"} w={rem(500)} bg={WARNA.bgNavbar} p={20}>
                    <Text fz={"lg"} fw={"bold"}>Taburan Umur</Text>
                    <Box pt={10}>
                      <Box>
                        <Flex pb={5} justify={"space-between"} align={"center"}>
                          <Text fz={"sm"}>18-25 Tahun</Text>
                          <Text fw={"bold"} fz={"sm"}>27.4%</Text>
                        </Flex>
                        <Progress color={"#3B80F7"} value={27.4} />
                      </Box>
                      <Box pt={10}>
                        <Flex pb={5} justify={"space-between"} align={"center"}>
                          <Text fz={"sm"}>26-40 Tahun</Text>
                          <Text fw={"bold"} fz={"sm"}>35.2%</Text>
                        </Flex>
                        <Progress color={"#11B880"} value={35.2} />
                      </Box>
                      <Box pt={10}>
                        <Flex pb={5} justify={"space-between"} align={"center"}>
                          <Text fw={"bold"} fz={"sm"}>41-60 Tahun</Text>
                          <Text fw={"bold"} fz={"sm"}>25.8%</Text>
                        </Flex>
                        <Progress color={"#F59E0B"} value={25.8} />
                      </Box>
                      <Box pt={10}>
                        <Flex pb={5} justify={"space-between"} align={"center"}>
                          <Text fw={"bold"} fz={"sm"}>{'>'}60 Tahun</Text>
                          <Text fw={"bold"} fz={"sm"}>11.6%</Text>
                        </Flex>
                        <Progress color={"#EF4545"} value={11.6} />
                      </Box>
                    </Box>
                  </Paper>
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

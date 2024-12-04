'use client'
import { LayoutBg, WARNA } from '@/module/_global';
import { Box, Flex, Image, Paper, Progress, rem, Select, SimpleGrid, Stack, Text } from '@mantine/core';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6';
function Content() {
  return (
    <Box>
      <LayoutBg>
        <Box p={20}>
          <Stack gap={"xs"}>
            <Box pb={10}>
              <Flex gap={"xs"} align={"center"} justify={"space-between"}>
                <Box>
                  <Text fw={800} fz={"lg"}>PEMIMPIN EFFECT</Text>
                  <Text fz={"sm"}>Analisis Pengaruh Pemimpin Utama</Text>
                </Box>
                <Box>
                  <Flex gap={"xs"} align={"center"}>
                    <Box>
                      <Select
                        placeholder="Pick value"
                        data={['Anwar Ibrahim', 'Zahid Hamidi', 'Muhyiddin Yassin', 'Abdul Hadi Awang']}
                        defaultValue="Anwar Ibrahim"
                        styles={{ input: { backgroundColor: "white", color: "black" } }}
                      />
                    </Box>
                    <Text fz={"sm"}>22 November 2024 14:31 GMT+8</Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Flex gap={"md"}>
                <Box>
                  <Box pb={15}>
                    <Paper h={"80.5vh"} w={rem(300)} bg={WARNA.bgNavbar} p={20}>
                      <Box>
                        <Box pt={10}>
                          <Stack justify='center' align='center'>
                            <Image radius={"lg"} src={"https://upload.wikimedia.org/wikipedia/commons/9/94/PM_of_Malaysia_Anwar_Ibrahim_meeting_with_PM_of_Japan_Fumio_Kishida_%282024%29_%28cropped%29.jpg"} alt='' w={240} />
                            <Box>
                              <Text fw={"bold"}>Dato{"'"} Seri Anwar Ibrahim</Text>
                              <Text ta={"center"} fz={"sm"}>Perdana Menteri Malaysia</Text>
                            </Box>
                            <Box>
                              <Paper mb={8} w={rem(210)} p={5} bg={"#515762FF"}>
                                <Text fz={"sm"} fw={"bold"} ta={"center"}>Pengerusi PH</Text>
                              </Paper>
                              <Paper w={rem(210)} p={5} bg={"#515762FF"}>
                                <Text fz={"sm"} fw={"bold"} ta={"center"}>Presiden PKR</Text>
                              </Paper>
                            </Box>
                          </Stack>
                        </Box>
                      </Box>
                    </Paper>
                    <Box py={10}>
                      <Stack align='center'>
                        <Flex gap={"xs"}>
                          <Paper p={15} bg={WARNA.bgNavbar} w={rem(140)}>
                            <Text fz={"sm"} fw={"bold"} ta={"center"}>Populariti</Text>
                            <Text ta={"center"} fz={"h5"} c={"#11B880"}>67%</Text>
                          </Paper>
                          <Paper p={15} bg={WARNA.bgNavbar} w={rem(150)}>
                            <Text fz={"sm"} fw={"bold"} ta={"center"}>Keyakinan</Text>
                            <Text ta={"center"} fz={"h5"} c={"#3B80F7"}>72%</Text>
                          </Paper>
                        </Flex>
                      </Stack>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Paper w={rem(700)} bg={WARNA.bgNavbar} p={20} pos={"relative"}>
                    <Box>
                      <Text fz={"xl"} fw={"bold"}>Taburan Kawasan</Text>
                      <Box pt={15}>
                        <SimpleGrid
                          cols={{ base: 1, sm: 1, md: 3, lg: 4 }}>
                          <Box>
                            <Paper radius={"sm"} w={rem(155)} bg={"#8D8D8D38"} p={10}>
                              <Text fz={"sm"} mb={5}>Media Coverage</Text>
                              <Text c={"#00A133FF"} fz={"lg"} fw={"bold"}>85%</Text>
                              <Flex gap={3} align={"center"}>
                                <FaArrowUp size={10} color='#00A133FF' />
                                <Text fz={"xs"} c={"#00A133FF"}>12% minggu lepas</Text>
                              </Flex>
                            </Paper>
                          </Box>
                          <Box>
                            <Paper radius={"sm"} w={rem(155)} bg={"#8D8D8D38"} p={10}>
                              <Text fz={"sm"} mb={5}>Social Media</Text>
                              <Text c={"#3A80F6"} fz={"lg"} fw={"bold"}>78%</Text>
                              <Flex gap={3} align={"center"}>
                                <FaArrowUp size={10} color='#3A80F6' />
                                <Text fz={"xs"} c={"#3A80F6"}>8% minggu lepas</Text>
                              </Flex>
                            </Paper>
                          </Box>
                          <Box>
                            <Paper radius={"sm"} w={rem(155)} bg={"#8D8D8D38"} p={10}>
                              <Text fz={"sm"} mb={5}>Public Trust</Text>
                              <Text c={"#DD9207FF"} fz={"lg"} fw={"bold"}>62%</Text>
                              <Flex align={"center"} gap={3}>
                                <FaArrowDown size={10} color='#DD9207FF' />
                                <Text fz={"xs"} c={"#DD9207FF"}>3% minggu lepas</Text>
                              </Flex>
                            </Paper>
                          </Box>
                          <Box>
                            <Paper radius={"sm"} w={rem(153)} bg={"#8D8D8D38"} p={10}>
                              <Text fz={"sm"} mb={5}>Kawasan Berisiko</Text>
                              <Text c={"#8B5CF6"} fz={"lg"} fw={"bold"}>70%</Text>
                              <Flex gap={3} align={"center"}>
                                <FaArrowUp size={10} color='#8B5CF6' />
                                <Text fz={"xs"} c={"#8B5CF6"}>5% minggu lepas</Text>
                              </Flex>
                            </Paper>
                          </Box>
                        </SimpleGrid>
                      </Box>
                    </Box>
                  </Paper>
                  <Box>
                    <Box>
                      <Flex gap={"md"}>
                        <Box>
                          <Box py={15}>
                            <Paper pos={"relative"} w={rem(340)} bg={WARNA.bgNavbar} p={20}>
                              <Text pb={10} fz={"lg"} fw={"bold"}>Sokongan Kaum</Text>
                              <Box>
                                <Flex justify={"space-between"}>
                                  <Text fz={"sm"} >Melayu</Text>
                                  <Text fz={"sm"} fw={"bold"} >45%</Text>
                                </Flex>
                                <Box pt={5}>
                                  <Progress size="sm" color={"#3B80F7"} value={45} />
                                </Box>
                              </Box>
                              <Box pt={10}>
                                <Flex justify={"space-between"}>
                                  <Text fz={"sm"} >Cina</Text>
                                  <Text fz={"sm"} fw={"bold"} >45%</Text>
                                </Flex>
                                <Box pt={5}>
                                  <Progress size="sm" color={"#11B880"} value={75} />
                                </Box>
                              </Box>
                              <Box pt={10}>
                                <Flex justify={"space-between"}>
                                  <Text fz={"sm"} >India</Text>
                                  <Text fz={"sm"} fw={"bold"} >68%</Text>
                                </Flex>
                                <Box pt={5}>
                                  <Progress size="sm" color={"#F59E0B"} value={68} />
                                </Box>
                              </Box>
                              <Box pt={10}>
                                <Flex justify={"space-between"}>
                                  <Text fz={"sm"} >Bumiputera S/S</Text>
                                  <Text fz={"sm"} fw={"bold"} >58%</Text>
                                </Flex>
                                <Box pt={5}>
                                  <Progress size="sm" color={"#8B5CF6"} value={58} />
                                </Box>
                              </Box>
                            </Paper>
                          </Box>
                        </Box>
                        <Box>
                          <Box py={15}>
                            <Paper pos={"relative"} w={rem(340)} bg={WARNA.bgNavbar} p={20}>
                              <Text pb={10} fz={"lg"} fw={"bold"}>Pengaruh Wilayah</Text>
                              <Box>
                                <Flex justify={"space-between"}>
                                  <Text fz={"sm"} >Pantai Barat</Text>
                                  <Text fz={"sm"} fw={"bold"} >72%</Text>
                                </Flex>
                                <Box pt={5}>
                                  <Progress size="sm" color={"#11B880"} value={72} />
                                </Box>
                              </Box>
                              <Box pt={10}>
                                <Flex justify={"space-between"}>
                                  <Text fz={"sm"} >Pantai Timur</Text>
                                  <Text fz={"sm"} fw={"bold"} >38%</Text>
                                </Flex>
                                <Box pt={5}>
                                  <Progress size="sm" color={"#EF4545"} value={38} />
                                </Box>
                              </Box>
                              <Box pt={10}>
                                <Flex justify={"space-between"}>
                                  <Text fz={"sm"} >Sabah</Text>
                                  <Text fz={"sm"} fw={"bold"} >55%</Text>
                                </Flex>
                                <Box pt={5}>
                                  <Progress size="sm" color={"#F59E0B"} value={55} />
                                </Box>
                              </Box>
                              <Box pt={10}>
                                <Flex justify={"space-between"}>
                                  <Text fz={"sm"} >Sarawak</Text>
                                  <Text fz={"sm"} fw={"bold"} >62%</Text>
                                </Flex>
                                <Box pt={5}>
                                  <Progress size="sm" color={"#3B80F7"} value={62} />
                                </Box>
                              </Box>
                            </Paper>
                          </Box>
                        </Box>
                      </Flex>
                    </Box>
                  </Box>
                  <Box>
                    <Flex gap={"md"}>
                      <Box>
                        <Paper pos={"relative"} w={rem(340)} bg={WARNA.bgNavbar} p={20}>
                          <Text fw={"bold"} fz={"md"} pb={10}>Isu Utama</Text>
                          <Box>
                            <Box>
                              <Flex pb={5} justify={"space-between"} align={"center"}>
                                <Text fz={"sm"}>Ekonomi</Text>
                                <Text fw={"bold"} c={"#B87011FF"} fz={"sm"}>Moderate</Text>
                              </Flex>
                              <Box pl={190}>
                                <Progress color={"#B87011FF"} value={65} />
                              </Box>
                            </Box>
                            <Box pt={15}>
                              <Flex pb={5} justify={"space-between"} align={"center"}>
                                <Text fz={"sm"}>Governans</Text>
                                <Text c={"#11B880"} fw={"bold"} fz={"sm"}>Strong</Text>
                              </Flex>
                              <Box pl={190}>
                                <Progress color={"#11B880"} value={85} />
                              </Box>
                            </Box>
                            <Box pt={15}>
                              <Flex pb={5} justify={"space-between"} align={"center"}>
                                <Text fz={"sm"}>Kos Sara Hidup</Text>
                                <Text fw={"bold"} c={"#EF4545"} fz={"sm"}>Weak</Text>
                              </Flex>
                              <Box pl={190}>
                                <Progress color={"#EF4545"} value={25} />
                              </Box>
                            </Box>
                          </Box>
                        </Paper>
                      </Box>
                      <Box>
                        <Paper pos={"relative"} w={rem(340)} bg={WARNA.bgNavbar} p={20}>
                          <Text fw={"bold"} fz={"md"} pb={10}>Impak Dasar</Text>
                          <Box>
                            <Box>
                              <Box pb={5}>
                                <Flex pb={5} justify={"space-between"} align={"center"}>
                                  <Text fz={"sm"}>Madani</Text>
                                  <Text c={"#11B880"} fw={"bold"} fz={"sm"}>High</Text>
                                </Flex>
                                <Box pl={190}>
                                  <Progress color={"#11B880"} value={85} />
                                </Box>
                              </Box>
                              <Flex pt={15} justify={"space-between"} align={"center"}>
                                <Text fz={"sm"}>Reformasi</Text>
                                <Text fw={"bold"} c={"#B87011FF"} fz={"sm"}>Med</Text>
                              </Flex>
                              <Box pl={190}>
                                <Progress color={"#B87011FF"} value={65} />
                              </Box>
                            </Box>
                            <Box pt={15}>
                              <Flex pb={5} justify={"space-between"} align={"center"}>
                                <Text fz={"sm"}>Ekonomi Rakyat</Text>
                                <Text fw={"bold"} c={"#EF4545"} fz={"sm"}>Low</Text>
                              </Flex>
                              <Box pl={190}>
                                <Progress color={"#EF4545"} value={35} />
                              </Box>
                            </Box>
                          </Box>
                        </Paper>
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Stack >
        </Box >
      </LayoutBg >
    </Box >
  )
}

export default Content;

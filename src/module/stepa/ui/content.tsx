'use client'
import { LayoutBg, WARNA } from '@/module/_global';
import { Box, Flex, List, ListItem, Paper, Progress, rem, Select, SimpleGrid, Stack, Text } from '@mantine/core';

function Content() {
  return (
    <Box>
      <LayoutBg>
        <Box p={20}>
          <Stack gap={"xs"}>
            <Box pb={10}>
              <Flex gap={"xs"} align={"center"} justify={"space-between"}>
                <Box>
                  <Text fw={800} fz={"lg"}>STEP ASSESSMENT</Text>
                  <Text fz={"sm"}>Penilaian Kemajuan Parti Politik</Text>
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
                    <Text fz={"sm"}>Last Updated: 22 November 2024</Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box pb={10}>
              <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 4 }}>
                <Box>
                  <Paper radius={"sm"} w={rem(240)} bg={WARNA.bgNavbar} p={10}>
                    <Text fz={"sm"} mb={5}>Persiapan PRU</Text>
                    <Text fz={"h3"} c={"#11B880"} fw={"bold"}>75%</Text>
                    <Text fz={"xs"} >Target: 90%</Text>
                  </Paper>
                </Box>
                <Box>
                  <Paper radius={"sm"} w={rem(240)} bg={WARNA.bgNavbar} p={10}>
                    <Text fz={"sm"} mb={5}>Jentera Parti</Text>
                    <Text fz={"h3"} c={"#F59E0B"} fw={"bold"}>65%</Text>
                    <Text fz={"xs"}>Target: 85%</Text>
                  </Paper>
                </Box>
                <Box>
                  <Paper radius={"sm"} w={rem(240)} bg={WARNA.bgNavbar} p={10}>
                    <Text fz={"sm"} mb={5}>Persediaan Calon</Text>
                    <Text fz={"h3"} c={"#3B80F7"} fw={"bold"}>80%</Text>
                    <Text fz={"xs"} >Target: 95%</Text>
                  </Paper>
                </Box>
                <Box>
                  <Paper radius={"sm"} w={rem(240)} bg={WARNA.bgNavbar} p={10}>
                    <Text fz={"sm"} mb={5}>Sokongan Akar Umbi</Text>
                    <Text fz={"h3"} c={"#8B5CF6"} fw={"bold"}>70%</Text>
                    <Text fz={"xs"} >Target: 80%</Text>
                  </Paper>
                </Box>
              </SimpleGrid>
            </Box>
            <Box>
              <Box pt={10}>
                <SimpleGrid cols={{ base: 1, sm: 1, md: 1, lg: 2 }}>
                  <Box>
                    <Paper w={rem(500)} h={rem(220)} bg={"#DDDDDD16"} p={10}>
                      <Text fz={"lg"} fw={"bold"} py={10}>1. Kesediaan Organisasi</Text>
                      <Box>
                        <Box>
                          <Flex pb={5} justify={"space-between"} align={"center"}>
                            <Text fz={"sm"}>Struktur Parti</Text>
                            <Text c={"#11B880"} fw={"bold"} fz={"sm"}>85%</Text>
                          </Flex>
                          <Box pt={5}>
                            <Progress color={"#11B880"} value={85} />
                          </Box>
                        </Box>
                        <Box pt={10}>
                          <Flex pb={5} justify={"space-between"} align={"center"}>
                            <Text fz={"sm"}>Database Pengundi</Text>
                            <Text fw={"bold"} c={"#B87011FF"} fz={"sm"}>70%</Text>
                          </Flex>
                          <Box pt={5}>
                            <Progress color={"#B87011FF"} value={70} />
                          </Box>
                        </Box>
                        <Box pt={10}>
                          <Flex pb={5} justify={"space-between"} align={"center"}>
                            <Text fz={"sm"}>Keahlian Parti</Text>
                            <Text fw={"bold"} c={"#3B80F7"} fz={"sm"}>75%</Text>
                          </Flex>
                          <Box pt={5}>
                            <Progress color={"#3B80F7"} value={75} />
                          </Box>
                        </Box>
                      </Box>
                    </Paper>
                  </Box>
                  <Box>
                    <Paper w={rem(500)} h={rem(220)} bg={"#DDDDDD16"} p={10}>
                      <Text fz={"lg"} fw={"bold"} py={10}>2. Persediaan Kempen</Text>
                      <Box>
                        <Box>
                          <Flex pb={5} justify={"space-between"} align={"center"}>
                            <Text fz={"sm"}>Strategi Kempen</Text>
                            <Text c={"#11B880"} fw={"bold"} fz={"sm"}>80%</Text>
                          </Flex>
                          <Box pt={5}>
                            <Progress color={"#11B880"} value={80} />
                          </Box>
                        </Box>
                        <Box pt={10}>
                          <Flex pb={5} justify={"space-between"} align={"center"}>
                            <Text fz={"sm"}>Bahan Kempen</Text>
                            <Text fw={"bold"} c={"#B87011FF"} fz={"sm"}>65%</Text>
                          </Flex>
                          <Box pt={5}>
                            <Progress color={"#B87011FF"} value={65} />
                          </Box>
                        </Box>
                        <Box pt={10}>
                          <Flex pb={5} justify={"space-between"} align={"center"}>
                            <Text fz={"sm"}>Media Sosial</Text>
                            <Text fw={"bold"} c={"#3B80F7"} fz={"sm"}>90%</Text>
                          </Flex>
                          <Box pt={5}>
                            <Progress color={"#3B80F7"} value={90} />
                          </Box>
                        </Box>
                      </Box>
                    </Paper>
                  </Box>
                  <Box>
                    <Paper w={rem(500)} h={rem(220)} bg={"#DDDDDD16"} p={10}>
                      <Text fz={"lg"} fw={"bold"} py={10}>3. Operasi Akar Umbi</Text>
                      <Box>
                        <Box>
                          <Flex pb={5} justify={"space-between"} align={"center"}>
                            <Text fz={"sm"}>Jentera Kawasan</Text>
                            <Text c={"#11B880"} fw={"bold"} fz={"sm"}>75%</Text>
                          </Flex>
                          <Box pt={5}>
                            <Progress color={"#11B880"} value={75} />
                          </Box>
                        </Box>
                        <Box pt={10}>
                          <Flex pb={5} justify={"space-between"} align={"center"}>
                            <Text fz={"sm"}>Program Komuniti</Text>
                            <Text fw={"bold"} c={"#B87011FF"} fz={"sm"}>85%</Text>
                          </Flex>
                          <Box pt={5}>
                            <Progress color={"#B87011FF"} value={85} />
                          </Box>
                        </Box>
                        <Box pt={10}>
                          <Flex pb={5} justify={"space-between"} align={"center"}>
                            <Text fz={"sm"}>Pusat Khidmat</Text>
                            <Text fw={"bold"} c={"#3B80F7"} fz={"sm"}>70%</Text>
                          </Flex>
                          <Box pt={5}>
                            <Progress color={"#3B80F7"} value={70} />
                          </Box>
                        </Box>
                      </Box>
                    </Paper>
                  </Box>
                  <Box>
                    <Paper w={rem(500)} h={rem(220)} bg={"#DDDDDD16"} p={10}>
                      <Text fz={"lg"} fw={"bold"} py={10}>4. Kesediaan PRU</Text>
                      <Box>
                        <Box>
                          <Flex pb={5} justify={"space-between"} align={"center"}>
                            <Text fz={"sm"}>Manifesto</Text>
                            <Text c={"#11B880"} fw={"bold"} fz={"sm"}>60%</Text>
                          </Flex>
                          <Box pt={5}>
                            <Progress color={"#11B880"} value={60} />
                          </Box>
                        </Box>
                        <Box pt={10}>
                          <Flex pb={5} justify={"space-between"} align={"center"}>
                            <Text fz={"sm"}>Pemilihan Calon</Text>
                            <Text fw={"bold"} c={"#B87011FF"} fz={"sm"}>55%</Text>
                          </Flex>
                          <Box pt={5}>
                            <Progress color={"#B87011FF"} value={55} />
                          </Box>
                        </Box>
                        <Box pt={10}>
                          <Flex pb={5} justify={"space-between"} align={"center"}>
                            <Text fz={"sm"}>Logistik PRU</Text>
                            <Text fw={"bold"} c={"#3B80F7"} fz={"sm"}>65%</Text>
                          </Flex>
                          <Box pt={5}>
                            <Progress color={"#3B80F7"} value={65} />
                          </Box>
                        </Box>
                      </Box>
                    </Paper>
                  </Box>
                </SimpleGrid>
              </Box>
            </Box>
            <Box>
              <Box pt={10}>
                <Paper radius={"sm"} pos={"relative"} w={rem(1015)} bg={WARNA.bgNavbar} p={15}>
                  <Box>
                    <Text fw={"bold"}>Tindakan Segera</Text>
                    <Box pt={10}>
                      <SimpleGrid cols={{ base: 1, sm: 1, md: 2, lg: 3 }}>
                        <Box>
                          <Paper w={rem(300)} withBorder style={{ borderColor: "#EE4544" }} bg={WARNA.bgNavbar} p={10}>
                            <Text fz={"sm"} fw={"bold"}>Kritikal</Text>
                            <List size="xs">
                              <ListItem>Finalisasi manifesto PRU</ListItem>
                              <ListItem>Pengukuhan jentera di kawasan marginal</ListItem>
                              <ListItem>Pemantapan database pengundi</ListItem>
                            </List>
                          </Paper>
                        </Box>
                        <Box>
                          <Paper w={rem(300)} withBorder style={{ borderColor: "#F59F0A" }} bg={WARNA.bgNavbar} p={10}>
                            <Text fz={"sm"} fw={"bold"}>Sederhana</Text>
                            <List size="xs">
                              <ListItem>Penambahbaikan bahan kempen</ListItem>
                              <ListItem>Latihan petugas parti</ListItem>
                              <ListItem>Program engagement komuniti</ListItem>
                            </List>
                          </Paper>
                        </Box>
                        <Box>
                          <Paper w={rem(300)} withBorder style={{ borderColor: "#10B980" }} bg={WARNA.bgNavbar} p={10}>
                            <Text fz={"sm"} fw={"bold"}>Dalam Progres</Text>
                            <List size="xs">
                              <ListItem>Kempen media sosial</ListItem>
                              <ListItem>Penstrukturan semula parti</ListItem>
                              <ListItem>Program turun padang</ListItem>
                            </List>
                          </Paper>
                        </Box>
                      </SimpleGrid>
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </Box>
          </Stack >
        </Box >
      </LayoutBg >
    </Box >
  );
}

export default Content;

import { LayoutBg, WARNA } from '@/module/_global';
import { Box, Button, Flex, Image, Notification, Paper, Progress, rem, SimpleGrid, Stack, Text } from '@mantine/core';

function Content() {
  return (
    <Box>
      <LayoutBg>
        <Box p={20}>
          <Stack gap={"xs"}>
            <Box pb={10}>
              <Flex gap={"xs"} align={"center"} justify={"space-between"}>
                <Box>
                  <Text fw={800} fz={"lg"}>Live Dashboard</Text>
                  <Text fz={"sm"}>Last Updated: 22 Nov 2024, 15:30 MYT</Text>
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
                  <Paper radius={"sm"} w={rem(240)} bg={WARNA.bgNavbar} p={10}>
                    <Text fz={"sm"} mb={5}>Total Kawasan Dipantau</Text>
                    <Text fz={"lg"} fw={"bold"}>222</Text>
                    <Text fz={"xs"} c={"#00A133FF"}>+5 dari semalam</Text>
                  </Paper>
                </Box>
                <Box>
                  <Paper radius={"sm"} w={rem(240)} bg={WARNA.bgNavbar} p={10}>
                    <Text fz={"sm"} mb={5}>Sentiment Positif</Text>
                    <Text fz={"lg"} fw={"bold"}>67.5%</Text>
                    <Text fz={"xs"} c={"#00A133FF"}>+2.3% dari minggu lepas</Text>
                  </Paper>
                </Box>
                <Box>
                  <Paper radius={"sm"} w={rem(240)} bg={WARNA.bgNavbar} p={10}>
                    <Text fz={"sm"} mb={5}>Isu Terpanas</Text>
                    <Text fz={"lg"} fw={"bold"}>Ekonomi</Text>
                    <Text fz={"xs"} c={"#DD9207FF"}>78% engagement</Text>
                  </Paper>
                </Box>
                <Box>
                  <Paper radius={"sm"} w={rem(240)} bg={WARNA.bgNavbar} p={10}>
                    <Text fz={"sm"} mb={5}>Jangkaan Keluar Mengundi</Text>
                    <Text fz={"lg"} fw={"bold"}>82.3%</Text>
                    <Text fz={"xs"} c={"#9481F2FF"}>Berdasarkan analisis AI</Text>
                  </Paper>
                </Box>
              </SimpleGrid>
            </Box>
            <Box>
              <Flex gap={"lg"}>
                <Box>
                  <Paper h={"55vh"} w={rem(650)} bg={WARNA.bgNavbar} p={20}>
                    <Text fz={"sm"} fw={"bold"}>Peta Sentiment Nasional</Text>
                    <Box pt={10}>
                        <Stack justify='center' align='center'>
                          <Image radius={"lg"} src={"assets/image/Malaysiani.jpeg"} alt='' w={600}/>
                        </Stack>
                    </Box>
                  </Paper>
                </Box>
                <Box>
                  <Paper h={"55vh"} bg={WARNA.bgNavbar} p={20} w={rem(345)}>
                    <Text fz={"sm"} fw={"bold"}>Isu Utama</Text>
                    <Box py={10}>
                      <Flex justify={"space-between"} align={"center"}>
                        <Text pb={10} fz={"sm"}>Ekonomi</Text>
                        <Text>78%</Text>
                      </Flex>
                      <Progress value={78} color='green' />
                    </Box>
                    <Box py={10}>
                      <Flex justify={"space-between"} align={"center"}>
                        <Text pb={10} fz={"sm"}>Kos Sara Hidup</Text>
                        <Text>65%</Text>
                      </Flex>
                      <Progress value={65} color='blue' />
                    </Box>
                    <Box py={10}>
                      <Flex justify={"space-between"} align={"center"}>
                        <Text pb={10} fz={"sm"}>Pekerjaan</Text>
                        <Text>45%</Text>
                      </Flex>
                      <Progress value={45} color='orange' />
                    </Box>
                  </Paper>
                </Box>
              </Flex>
            </Box>
            <Box pt={15}>
              <Flex justify={"space-around"} gap={"sm"}>
                <Box>
                  <Paper h={"47vh"} w={rem(335)} bg={WARNA.bgNavbar} p={20}>
                    <Stack>
                      <Text fw={"bold"}>Kekuatan Pakatan</Text>
                      <Box>
                        <Flex pb={10} justify={"space-between"} align={"center"}>
                          <Text pb={5} fz={"sm"}>PH-BN</Text>
                          <Text>42%</Text>
                        </Flex>
                        <Progress value={42} color='grape' />
                      </Box>
                      <Box>
                        <Flex pb={10} justify={"space-between"} align={"center"}>
                          <Text pb={5} fz={"sm"}>PN</Text>
                          <Text>38%</Text>
                        </Flex>
                        <Progress value={38} color='green' />
                      </Box>
                      <Box>
                        <Flex pb={10} justify={"space-between"} align={"center"}>
                          <Text pb={5} fz={"sm"}>GPS</Text>
                          <Text>12%</Text>
                        </Flex>
                        <Progress value={12} color='red' />
                      </Box>
                    </Stack>
                  </Paper>
                </Box>
                <Box>
                  <Paper h={"47vh"} w={rem(320)} bg={WARNA.bgNavbar} p={20}>
                    <Stack>
                      <Text>Taburan Demografi</Text>
                      <Box>
                        <Flex pb={10} justify={"space-between"} align={"center"}>
                          <Text pb={5} fz={"sm"}>Melayu</Text>
                          <Text>55%</Text>
                        </Flex>
                        <Progress value={55} color='grape' />
                      </Box>
                      <Box>
                        <Flex pb={10} justify={"space-between"} align={"center"}>
                          <Text pb={5} fz={"sm"}>Cina</Text>
                          <Text>23%</Text>
                        </Flex>
                        <Progress value={23} color='orange' />
                      </Box>
                      <Box>
                        <Flex pb={10} justify={"space-between"} align={"center"}>
                          <Text pb={5} fz={"sm"}>India</Text>
                          <Text>7%</Text>
                        </Flex>
                        <Progress value={7} color='dark' />
                      </Box>
                    </Stack>
                  </Paper>
                </Box>
                <Box>
                  <Paper w={rem(320)} bg={WARNA.bgNavbar} p={20}>
                    <Stack>
                      <Text>Aktivi Terkini</Text>
                      <Notification bg={WARNA.bgNavbar} withCloseButton={false} color="#11B880">
                        <Text fw={"bold"} fz={"sm"}>Ceramah di Selangor</Text>
                        <Text fz={"xs"}>2000 kehadiran</Text>
                        <Text fz={"xs"}>2 jam yang lepas</Text>
                      </Notification>
                      <Notification bg={WARNA.bgNavbar} withCloseButton={false} color="#F49F0B">
                        <Text fw={"bold"} fz={"sm"}>Program di Johor</Text>
                        <Text fz={"xs"}>1500 kehadiran</Text>
                        <Text fz={"xs"}>4 jam yang lepas</Text>
                      </Notification>
                      <Notification bg={WARNA.bgNavbar} withCloseButton={false} color="#EF4444">
                        <Text fw={"bold"} fz={"sm"}>Majlis di Kedah</Text>
                        <Text fz={"xs"}>800 kehadiran</Text>
                        <Text fz={"xs"}>6 jam yang lepas</Text>
                      </Notification>
                    </Stack>
                  </Paper>
                </Box>
              </Flex>
            </Box>
          </Stack>
        </Box>
      </LayoutBg>
    </Box>
  );
}

export default Content;

'use client'
import { LayoutBg, WARNA } from '@/module/_global';
import { Box, Flex, Image, List, ListItem, Paper, rem, Select, Stack, Text } from '@mantine/core';
import { FaBell } from 'react-icons/fa6';
function Content() {
  return (
    <Box>
      <LayoutBg>
        <Box p={20}>
          <Stack gap={"xs"}>
            <Box pb={10}>
              <Flex gap={"xs"} align={"center"} justify={"space-between"}>
                <Box>
                  <Text fw={800} fz={"lg"}>ANALISA SWORT PARTI POLITIK</Text>
                  <Text fz={"sm"}>22 November 2024 14:25 GMT+8</Text>
                </Box>
                <Box>
                  <Flex gap={"xs"} align={"center"}>
                    <Box>
                      <Select
                        placeholder="Pick value"
                        data={['Pakatan Harapan', 'Barisan Nasional', 'Perikatan Nasional', 'Gabungan Parti Serawak', 'Gabungan Rakyat Sabah']}
                        defaultValue="Pakatan Harapan"
                        styles={{ input: { backgroundColor: "white", color: "black" } }}
                      />
                    </Box>
                    <FaBell size={20} color='#A98228' />
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Flex gap={"md"}>
                <Box>
                  <Box pb={15}>
                    <Paper h={"62vh"} w={rem(300)} bg={WARNA.bgNavbar} p={20}>
                      <Box>
                        <Box pt={10}>
                          <Stack justify='center' align='center'>
                            <Image radius={"lg"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Pakatan-harapan-logo.svg/2880px-Pakatan-harapan-logo.svg.png"} alt='' w={240} />
                            <Box>
                              <Text ta={"center"} fw={"bold"}>Pakatan Harapan</Text>
                              <Text ta={"center"} fz={"sm"}>Gabungan Parti Komponen:</Text>
                            </Box>
                            <Box>
                              <Paper mb={8} w={rem(210)} p={5} bg={"#51576282"}>
                                <Text fz={"sm"} fw={"bold"} ta={"center"}>PKR - Parti Keadilan Rakyat</Text>
                              </Paper>
                              <Paper mb={8} w={rem(210)} p={5} bg={"#51576282"}>
                                <Text fz={"sm"} fw={"bold"} ta={"center"}>DAP - Democratic Action Party</Text>
                              </Paper>
                              <Paper mb={8} w={rem(210)} p={5} bg={"#51576282"}>
                                <Text fz={"sm"} fw={"bold"} ta={"center"}>AMANAH - Parti Amanah Negara</Text>
                              </Paper>
                              <Paper w={rem(210)} p={5} bg={"#51576282"}>
                                <Text fz={"sm"} fw={"bold"} ta={"center"}>UPKO - United Progressive Kinabalu Organisation</Text>
                              </Paper>
                            </Box>
                          </Stack>
                        </Box>
                      </Box>
                    </Paper>
                  </Box>
                </Box>
                <Box>
                  <Stack gap={"xs"}
                  >
                    <Box>
                      <Paper radius={"sm"} h={"27vh"} w={rem(660)} bg={"#8D8D8D38"} p={10}>
                        <Text c={"#11B880"} fw={"bold"} fz={"md"} mb={5}>STRENGTH</Text>
                        <List size='sm' fw={"bold"}>
                          <ListItem>Kedudukan dominan dalam kerajaan persekutuan sebagai tulang belakang kerajaan perpaduan</ListItem>
                          <ListItem>Sokongan pelbagai kaum yang kukuh terutama di kawasan bandar</ListItem>
                          <ListItem>Pengalaman mentadbir kerajaan di peringkat persekutuan dan negeri</ListItem>
                          <ListItem>Rangkaian kepemimpinan yang berpengalaman dari pelbagai latar belakang</ListItem>
                          <ListItem>Naratif pembaharuan dan reformasi yang konsisten</ListItem>
                          <ListItem>Jenama parti yang kukuh di kalangan pengundi urban dan pengundi muda</ListItem>
                        </List>
                      </Paper>
                    </Box>
                    <Box>
                      <Paper radius={"sm"} h={"24vh"} w={rem(660)} bg={"#8D8D8D38"} p={10}>
                        <Text c={"#EF4545"} fw={"bold"} fz={"md"} mb={5}>WEAKNESS</Text>
                        <List size='sm' fw={"bold"}>
                          <ListItem>Cabaran mendapat sokongan pengundi Melayu di kawasan luar bandar</ListItem>
                          <ListItem>Persepsi negatif dari sesetengah kumpilan Bumiputera terhadap dasar-dasar parti</ListItem>
                          <ListItem>Kebergantungan kepada sokongan parti komponen untuk menang di sesetengah kawasan</ListItem>
                          <ListItem>Kesukaran menyelaraskan dasar antara parti komponen yang berbeza ideologi</ListItem>
                          <ListItem>Kurang pengaruh di kawasan pedalaman Sabah dan Sarawak</ListItem>
                          <ListItem>Kritikan berterusan tentang prestasi pentadbiran kerajaan</ListItem>
                        </List>
                      </Paper>
                    </Box>
                    <Box>
                      <Paper radius={"sm"} h={"24vh"} w={rem(660)} bg={"#8D8D8D38"} p={10}>
                        <Text c={"#3B80F7"} fw={"bold"} fz={"md"} mb={5}>OPPORTUNITY</Text>
                        <List size='sm' fw={"bold"}>
                          <ListItem>Kerjasama dengan BN membuka peluang meraih sokongan pengundi Melayu tradisional</ListItem>
                          <ListItem>Potensi pengundi muda yang cenderung kepada agenda pembaharuan</ListItem>
                          <ListItem>Peluang memperkukuh sokongan melalui prestasi pentadbiran kerajaan</ListItem>
                          <ListItem>Pembangunan kepimpinan baru dari kalangan profesional dan aktivis</ListItem>
                          <ListItem>Pengukuhan hubungan dengan GPS dan GRS untuk sokongan di Malaysia Timur</ListItem>
                          <ListItem>Platform MADANI sebagai naratif pembangunan negara yang inklusif</ListItem>
                        </List>
                      </Paper>
                    </Box>
                    <Box>
                      <Paper radius={"sm"} h={"24vh"} w={rem(660)} bg={"#8D8D8D38"} p={10}>
                        <Text c={"#F59E0B"} fw={"bold"} fz={"md"} mb={5}>THREAT</Text>
                        <List size='sm' fw={"bold"}>
                          <ListItem>Kebangkitan PN dalam meraih sokongan pengundi Melayu</ListItem>
                          <ListItem>Isu-isu sensitif berkaitan agama dan kaum yang boleh menggugat sokongan</ListItem>
                          <ListItem>Ketidakstabilan dalam kerajaan perpaduan boleh menjejaskan pentadbiran</ListItem>
                          <ListItem>Tekanan ekonomi global yang memberi kesan kepada prestasi kerajaan</ListItem>
                          <ListItem>Perpecahan dalaman antara parti komponen</ListItem>
                          <ListItem>Sentimen anti-establishment di kalangan pengundi muda yang kecewa</ListItem>
                        </List>
                      </Paper>
                    </Box>
                  </Stack>
                </Box>
              </Flex>
              <Box pt={15}>
                <Flex justify={"space-around"} gap={"sm"}>
                  <Box>
                    <Paper h={"35vh"} w={rem(335)} bg={WARNA.bgNavbar} p={20}>
                      <Stack>
                        <Text fw={"bold"}>Kerusi Parlimen</Text>
                        <Box>
                          <Flex pb={10} justify={"space-between"} align={"center"}>
                            <Text pb={5} fz={"sm"}>Jumlah Kerusi</Text>
                            <Text c={"#11B880"}>82</Text>
                          </Flex>
                        </Box>
                        <Box>
                          <Flex pb={10} justify={"space-between"} align={"center"}>
                            <Text pb={5} fz={"sm"}>Kerusi Selamat</Text>
                            <Text c={"#3A81F2"}>45</Text>
                          </Flex>
                        </Box>
                        <Box>
                          <Flex pb={10} justify={"space-between"} align={"center"}>
                            <Text pb={5} fz={"sm"}>Marginal</Text>
                            <Text c={"#F59E0B"}>25</Text>
                          </Flex>
                        </Box>
                        <Box>
                          <Flex pb={10} justify={"space-between"} align={"center"}>
                            <Text pb={5} fz={"sm"}>Berisiko</Text>
                            <Text c={"#EF4545"}>12</Text>
                          </Flex>
                        </Box>
                      </Stack>
                    </Paper>
                  </Box>
                  <Box>
                    <Paper h={"35vh"} w={rem(320)} bg={WARNA.bgNavbar} p={20}>
                      <Stack>
                        <Text fw={"bold"}>Sokongan Demografi</Text>
                        <Box>
                          <Flex pb={10} justify={"space-between"} align={"center"}>
                            <Text pb={5} fz={"sm"}>Urban</Text>
                            <Text c={"#11B880"}>75%</Text>
                          </Flex>
                        </Box>
                        <Box>
                          <Flex pb={10} justify={"space-between"} align={"center"}>
                            <Text pb={5} fz={"sm"}>Semi-Urban</Text>
                            <Text c={"#F59E0B"}>55%</Text>
                          </Flex>
                        </Box>
                        <Box>
                          <Flex pb={10} justify={"space-between"} align={"center"}>
                            <Text pb={5} fz={"sm"}>Rural</Text>
                            <Text c={"#EF4545"}>35%</Text>
                          </Flex>
                        </Box>
                      </Stack>
                    </Paper>
                  </Box>
                  <Box>
                    <Paper w={rem(320)} h={"35vh"} bg={WARNA.bgNavbar} p={20}>
                      <Stack>
                        <Text fw={"bold"}>Prestasi Pentadbiran</Text>
                        <Box>
                          <Flex pb={10} justify={"space-between"} align={"center"}>
                            <Text pb={5} fz={"sm"}>Ekonomi</Text>
                            <Text c={"#F59E0B"}>Moderate</Text>
                          </Flex>
                        </Box>
                        <Box>
                          <Flex pb={10} justify={"space-between"} align={"center"}>
                            <Text pb={5} fz={"sm"}>Sosial</Text>
                            <Text c={"#11B880"}>Good</Text>
                          </Flex>
                        </Box>
                        <Box>
                          <Flex pb={10} justify={"space-between"} align={"center"}>
                            <Text pb={5} fz={"sm"}>Governans</Text>
                            <Text c={"#11B880"}>Good</Text>
                          </Flex>
                        </Box>
                      </Stack>
                    </Paper>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Stack >
        </Box >
      </LayoutBg >
    </Box >
  )
}

export default Content;

import { Button } from './ui/button'
import { useState, useEffect, useRef } from 'react'

// Asset constants - from Figma design
const imgNodoLogo = "data:image/svg+xml,%3Csvg width='43' height='14' viewBox='0 0 43 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.5 0L17 7L8.5 14L0 7L8.5 0Z' fill='%23FF6B35'/%3E%3Cpath d='M25.5 0L34 7L25.5 14L17 7L25.5 0Z' fill='%23FF6B35'/%3E%3C/svg%3E"

// Hero sphere images from Figma
const imgHeroSphere = "http://localhost:3845/assets/256c608c492172c86679879aeb543ec2e58eee83.png"
const imgHeroSphereMask = "http://localhost:3845/assets/3d7097266995ad1044f383915d0035b49c212f55.svg"
const imgEllipseGlow = "http://localhost:3845/assets/b45acdf9e2603fbcea02f24aa2350113bbb296de.svg"
// Trading card assets from Figma
const imgCetusIcon = "http://localhost:3845/assets/dad7da1332e13b4e49cb14bc37e4a32f46bc1aa8.png"
const imgWalIcon = "http://localhost:3845/assets/3ff6833810c6a503f6a615169e703e99ebad90aa.png"
const imgSuiIcon = "http://localhost:3845/assets/e251b9c30938733940351fe0d89e2f0e3320fc14.png"
const imgDeepIcon = "http://localhost:3845/assets/0bca917564f3f153ffb4dfb81013fd3e404ffbf1.png"
const imgUsdcIcon = "http://localhost:3845/assets/69e70b50598874334c620e64f41305210e6ad4de.svg"

// Bluefin logo vectors from Figma
const imgBluefinVector1 = "http://localhost:3845/assets/1fbd273cfaaf3d5e0075c6b5770e1b54871f2911.svg"
const imgBluefinVector2 = "http://localhost:3845/assets/c1695e6fa1f52345172d9afd81edf4fe340177f5.svg"
const imgBluefinVector3 = "http://localhost:3845/assets/6fcfa8422cb22aa7c2d47f67123205c44f70a497.svg"
const imgBluefinVector4 = "http://localhost:3845/assets/32b39f610e7fc037faac0d5cd27316c600f9c2ca.svg"
const imgBluefinVector5 = "http://localhost:3845/assets/596ef4222ae9b0d645052a000402bdaf2ab8790b.svg"
const imgBluefinVector6 = "http://localhost:3845/assets/260c975e41ce2454a157d5ad599e992654196ff8.svg"
const imgBluefinVector7 = "http://localhost:3845/assets/10d3b1ce44ace2476ccc08c9a1b5b20a7ca276f0.svg"
const imgBluefinVector8 = "http://localhost:3845/assets/b47023a3c58773c7f5d874fdabec0c945677cc1b.svg"

// Third card bluefin vectors
const imgBluefinVector9 = "http://localhost:3845/assets/4780baf175b5d162449eeadc32e15fe040a32201.svg"
const imgBluefinVector10 = "http://localhost:3845/assets/99bee60c00aeb0de298d75338d2f1fbca6309453.svg"
const imgBluefinVector11 = "http://localhost:3845/assets/446722a35ebb79452989a6111c6a9f5d5ec6676f.svg"
const imgBluefinVector12 = "http://localhost:3845/assets/c7453c04060e3c50504540f68e540cda00ce914e.svg"
const imgBluefinVector13 = "http://localhost:3845/assets/db74eb4db543b8fe229d6199708dc6c44191fe7c.svg"
const imgBluefinVector14 = "http://localhost:3845/assets/b2453006f699eca09bb119430a88959746c43f0e.svg"
const imgBluefinVector15 = "http://localhost:3845/assets/331902ef39116945fbc726f7063b6ea497b7ea59.svg"
const imgBluefinVector16 = "http://localhost:3845/assets/668b1b5b4d14e20e21bcf6b4c2012ecd7b1ff9ba.svg"
const imgFishIcon = "data:image/svg+xml,%3Csvg width='170' height='103' viewBox='0 0 170 103' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 51.5C10 51.5 40 20 85 51.5C130 83 160 51.5 160 51.5' stroke='%23FFB800' stroke-width='4' fill='none'/%3E%3Ccircle cx='85' cy='51.5' r='15' fill='%23FFB800'/%3E%3C/svg%3E"
const imgCetusLogo = "data:image/svg+xml,%3Csvg width='110' height='31' viewBox='0 0 110 31' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='5' y='20' fill='white' font-size='16'%3ECETUS%3C/text%3E%3C/svg%3E"
const imgMomentumLogo = "data:image/svg+xml,%3Csvg width='140' height='24' viewBox='0 0 140 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='5' y='15' fill='white' font-size='14'%3EMomentum%3C/text%3E%3C/svg%3E"
const imgCnsLogo = "data:image/svg+xml,%3Csvg width='70' height='21' viewBox='0 0 70 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='5' y='15' fill='white' font-size='14'%3ECNS%3C/text%3E%3C/svg%3E"
const imgQuillauditsLogo = "data:image/svg+xml,%3Csvg width='155' height='25' viewBox='0 0 155 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='5' y='15' fill='white' font-size='12'%3EQuillAudits%3C/text%3E%3C/svg%3E"
const imgTelegraphLogo = "data:image/svg+xml,%3Csvg width='139' height='36' viewBox='0 0 139 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='5' y='20' fill='white' font-size='16'%3ETelegraph%3C/text%3E%3C/svg%3E"
const imgCryptopolitanLogo = "data:image/svg+xml,%3Csvg width='137' height='32' viewBox='0 0 137 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='5' y='20' fill='white' font-size='14'%3ECryptopolitan%3C/text%3E%3C/svg%3E"

// Feature section images
const imgFeatureFish = "data:image/svg+xml,%3Csvg width='142' height='181' viewBox='0 0 142 181' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M71 90.5C71 90.5 100 60 130 90.5C160 121 130 150.5 130 150.5C130 150.5 100 121 71 90.5Z' fill='%23FFB800'/%3E%3Ccircle cx='95' cy='90.5' r='8' fill='%23000'/%3E%3Cpath d='M20 90.5C20 90.5 50 60 71 90.5' stroke='%23FFB800' stroke-width='3' fill='none'/%3E%3C/svg%3E"
const imgDashboard = "data:image/svg+xml,%3Csvg width='287' height='293' viewBox='0 0 287 293' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='20' y='20' width='247' height='253' rx='20' fill='%23001122' stroke='%234A90E2'/%3E%3Ctext x='143' y='50' text-anchor='middle' fill='white' font-size='16'%3EDashboard%3C/text%3E%3Crect x='40' y='80' width='207' height='60' rx='10' fill='%23002244'/%3E%3Ctext x='143' y='105' text-anchor='middle' fill='%234A90E2' font-size='12'%3EPosition Monitor%3C/text%3E%3Ctext x='143' y='125' text-anchor='middle' fill='white' font-size='14'%3E24/7 Active%3C/text%3E%3C/svg%3E"
const imgChart = "data:image/svg+xml,%3Csvg width='238' height='233' viewBox='0 0 238 233' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='20' y='20' width='198' height='193' rx='15' fill='%23001122'/%3E%3Cpath d='M40 180L70 150L100 160L130 130L160 140L190 110' stroke='%234A90E2' stroke-width='3' fill='none'/%3E%3Cpath d='M40 180L70 150L100 160L130 130L160 140L190 110L190 180L40 180Z' fill='%234A90E2' fill-opacity='0.2'/%3E%3Ctext x='119' y='210' text-anchor='middle' fill='white' font-size='12'%3EAuto Range%3C/text%3E%3C/svg%3E"
const imgVault = "data:image/svg+xml,%3Csvg width='228' height='215' viewBox='0 0 228 215' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='20' y='20' width='188' height='175' rx='20' fill='%23001122' stroke='%234A90E2'/%3E%3Ccircle cx='114' cy='107' r='40' fill='%23002244' stroke='%234A90E2' stroke-width='2'/%3E%3Ctext x='114' y='95' text-anchor='middle' fill='white' font-size='10'%3EVAULT%3C/text%3E%3Ctext x='114' y='115' text-anchor='middle' fill='%234A90E2' font-size='12'%3EAuto-Reinvest%3C/text%3E%3Cpath d='M94 87L114 102L134 87' stroke='%234A90E2' stroke-width='2' fill='none'/%3E%3C/svg%3E"
const imgOptimizer = "data:image/svg+xml,%3Csvg width='268' height='268' viewBox='0 0 268 268' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='20' y='20' width='228' height='228' rx='15' fill='%23001122'/%3E%3Cpath d='M50 200L80 180L110 190L140 160L170 170L200 140L220 130' stroke='%234A90E2' stroke-width='3' fill='none'/%3E%3Cpath d='M50 200L80 180L110 190L140 160L170 170L200 140L220 130L220 200L50 200Z' fill='%234A90E2' fill-opacity='0.2'/%3E%3Ccircle cx='220' cy='130' r='8' fill='%23FFB800'/%3E%3Ctext x='134' y='230' text-anchor='middle' fill='white' font-size='12'%3EOptimized Exit%3C/text%3E%3C/svg%3E"
const imgGlowEffect = "data:image/svg+xml,%3Csvg width='403' height='81' viewBox='0 0 403 81' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='201.5' cy='40.5' rx='201.5' ry='40.5' fill='url(%23glow)'/%3E%3Cdefs%3E%3CradialGradient id='glow'%3E%3Cstop offset='0%25' stop-color='%234A90E2' stop-opacity='0.8'/%3E%3Cstop offset='100%25' stop-color='%234A90E2' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3C/svg%3E"


// BTCfi section assets
const imgBtcFishLeft = "data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 50C120 50 140 70 140 100C140 130 120 150 100 150C80 150 60 130 60 100C60 70 80 50 100 50Z' fill='%23FFB800'/%3E%3Ccircle cx='85' cy='90' r='5' fill='%23000'/%3E%3Cpath d='M115 95C115 95 125 85 135 95C135 105 125 115 115 115' fill='%23FFB800'/%3E%3Ccircle cx='100' cy='100' r='25' fill='%23FF8C00' stroke='%23FFB800' stroke-width='2'/%3E%3Ctext x='100' y='105' text-anchor='middle' fill='white' font-size='16' font-weight='bold'%3E₿%3C/text%3E%3C/svg%3E"
const imgBtcFishRight = "data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 50C80 50 60 70 60 100C60 130 80 150 100 150C120 150 140 130 140 100C140 70 120 50 100 50Z' fill='%23FFB800'/%3E%3Ccircle cx='115' cy='90' r='5' fill='%23000'/%3E%3Cpath d='M85 95C85 95 75 85 65 95C65 105 75 115 85 115' fill='%23FFB800'/%3E%3Ccircle cx='100' cy='100' r='25' fill='%23FF8C00' stroke='%23FFB800' stroke-width='2'/%3E%3Ctext x='100' y='105' text-anchor='middle' fill='white' font-size='16' font-weight='bold'%3E₿%3C/text%3E%3C/svg%3E"

// Vision section assets
const imgCheckIcon = "data:image/svg+xml,%3Csvg width='10' height='17' viewBox='0 0 10 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 9L4 12L9 4' stroke='%23FFE8C9' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
const imgMomentumLogo2 = "data:image/svg+xml,%3Csvg width='140' height='22' viewBox='0 0 140 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 16L10 6L15 16M20 16V6M25 6V16M35 6V16M40 6V16' stroke='white' stroke-width='2' fill='none'/%3E%3Ctext x='50' y='15' fill='white' font-size='14' font-weight='bold'%3EMomentum%3C/text%3E%3C/svg%3E"
const imgCetusLogo2 = "data:image/svg+xml,%3Csvg width='117' height='28' viewBox='0 0 117 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='5' y='20' fill='white' font-size='16' font-weight='bold'%3ECETUS%3C/text%3E%3C/svg%3E"
const imgBluefinLogo2 = "data:image/svg+xml,%3Csvg width='106' height='24' viewBox='0 0 106 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='5' y='16' fill='white' font-size='14' font-weight='bold'%3Ebluefin%3C/text%3E%3C/svg%3E"
const imgDeepBookLogo = "data:image/svg+xml,%3Csvg width='118' height='20' viewBox='0 0 118 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='5' y='15' fill='white' font-size='14' font-weight='bold'%3EDeepBook%3C/text%3E%3C/svg%3E"
const imgSuilendLogo = "data:image/svg+xml,%3Csvg width='120' height='33' viewBox='0 0 120 33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='5' y='22' fill='white' font-size='18' font-weight='bold'%3ESuilend%3C/text%3E%3C/svg%3E"
const imgScallopLogo = "data:image/svg+xml,%3Csvg width='110' height='33' viewBox='0 0 110 33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='15' cy='16' r='12' fill='%234A90E2'/%3E%3Ctext x='35' y='22' fill='white' font-size='18' font-weight='bold'%3EScallop%3C/text%3E%3C/svg%3E"

// Our Partners section assets
// VCs / ACCELERATORS
const imgEmurgoLogo = "data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3EEMURGO%3C/text%3E%3C/svg%3E"
const imgAdaverseLogo = "data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='%234A90E2' font-size='14' font-weight='bold'%3EAdaVerse%3C/text%3E%3C/svg%3E"
const imgKeppleLogo = "data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3EKEPPLE%3C/text%3E%3C/svg%3E"
const imgCVLabsLogo = "data:image/svg+xml,%3Csvg width='80' height='30' viewBox='0 0 80 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3ECV%3C/text%3E%3C/svg%3E"
const imgGreenhouseLogo = "data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='12' font-weight='bold'%3EGreenhouse%3C/text%3E%3C/svg%3E"
const imgSaladLogo = "data:image/svg+xml,%3Csvg width='100' height='30' viewBox='0 0 100 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='%2300FF5E' font-size='14' font-weight='bold'%3Esalad%3C/text%3E%3C/svg%3E"
const imgWeb3VenturesLogo = "data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3EWEB3%3C/text%3E%3C/svg%3E"

// LAUNCHPAD
const imgSunPumpLogo = "data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='%23FFB800' font-size='14' font-weight='bold'%3ESUN PUMP%3C/text%3E%3C/svg%3E"
const imgSporesLogo = "data:image/svg+xml,%3Csvg width='100' height='30' viewBox='0 0 100 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3ESPORES%3C/text%3E%3C/svg%3E"
const imgKommunitasLogo = "data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='%234A90E2' font-size='14' font-weight='bold'%3EKommunitas%3C/text%3E%3C/svg%3E"

// EXCHANGES
const imgOKXLogo = "data:image/svg+xml,%3Csvg width='80' height='30' viewBox='0 0 80 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3EOKX%3C/text%3E%3C/svg%3E"
const imgCoinstoreLogo = "data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3ECoinstore%3C/text%3E%3C/svg%3E"
const imgSuperexLogo = "data:image/svg+xml,%3Csvg width='100' height='30' viewBox='0 0 100 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='%23FFB800' font-size='14' font-weight='bold'%3ESUPEREX%3C/text%3E%3C/svg%3E"
const imgExolixLogo = "data:image/svg+xml,%3Csvg width='100' height='30' viewBox='0 0 100 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3EEXOLIX%3C/text%3E%3C/svg%3E"
const imgBitfinexLogo = "data:image/svg+xml,%3Csvg width='100' height='30' viewBox='0 0 100 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3EBitfinex%3C/text%3E%3C/svg%3E"
const imgProbitLogo = "data:image/svg+xml,%3Csvg width='100' height='30' viewBox='0 0 100 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3EPROBIT%3C/text%3E%3C/svg%3E"

// L1 / L2
const imgTetherLogo = "data:image/svg+xml,%3Csvg width='100' height='30' viewBox='0 0 100 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='%2300FF5E' font-size='14' font-weight='bold'%3Etether%3C/text%3E%3C/svg%3E"
const imgAvalancheLogo = "data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='%23FF4444' font-size='14' font-weight='bold'%3EAVALANCHE%3C/text%3E%3C/svg%3E"
const imgListLogo = "data:image/svg+xml,%3Csvg width='80' height='30' viewBox='0 0 80 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3EList%3C/text%3E%3C/svg%3E"
const imgCoinbaseLogo = "data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='%234A90E2' font-size='14' font-weight='bold'%3Ecoinbase%3C/text%3E%3C/svg%3E"
const imgCBLOLogo = "data:image/svg+xml,%3Csvg width='80' height='30' viewBox='0 0 80 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3ECBLO%3C/text%3E%3C/svg%3E"
const imgICPLogo = "data:image/svg+xml,%3Csvg width='140' height='30' viewBox='0 0 140 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='%234A90E2' font-size='12' font-weight='bold'%3EINTERNET%3C/text%3E%3C/svg%3E"
const imgArtheraLogo = "data:image/svg+xml,%3Csvg width='100' height='30' viewBox='0 0 100 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3Earthera%3C/text%3E%3C/svg%3E"
const imgBitfinityLogo = "data:image/svg+xml,%3Csvg width='100' height='30' viewBox='0 0 100 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3EBitfinity%3C/text%3E%3C/svg%3E"
const imgHelaLogo = "data:image/svg+xml,%3Csvg width='80' height='30' viewBox='0 0 80 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3EHeLa%3C/text%3E%3C/svg%3E"
const imgMultiversLogo = "data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3EMultivers%3C/text%3E%3C/svg%3E"
const imgMultiplxLogo = "data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3EMULTIPLX%3C/text%3E%3C/svg%3E"
const imgLiskLogo = "data:image/svg+xml,%3Csvg width='80' height='30' viewBox='0 0 80 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3ELisk%3C/text%3E%3C/svg%3E"
const imgOpenOceanLogo = "data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3EOpenOcean%3C/text%3E%3C/svg%3E"
const imgBTCLayerLogo = "data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='%23FFB800' font-size='14' font-weight='bold'%3EBTCLAYER%3C/text%3E%3C/svg%3E"

// DEFI / AI
const imgNeploLogo = "data:image/svg+xml,%3Csvg width='80' height='30' viewBox='0 0 80 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='%234A90E2' font-size='14' font-weight='bold'%3ENeplo%3C/text%3E%3C/svg%3E"
const imgEMoneyLogo = "data:image/svg+xml,%3Csvg width='100' height='30' viewBox='0 0 100 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3EE Money%3C/text%3E%3C/svg%3E"
const imgSerenityLogo = "data:image/svg+xml,%3Csvg width='140' height='30' viewBox='0 0 140 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='%2300FF5E' font-size='14' font-weight='bold'%3ESerenity Shield%3C/text%3E%3C/svg%3E"
const imgCanzaLogo = "data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='%23FF00FF' font-size='14' font-weight='bold'%3Ecanza finance%3C/text%3E%3C/svg%3E"
const imgChangeNowLogo = "data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='%2300FF5E' font-size='14' font-weight='bold'%3EchangeNOW%3C/text%3E%3C/svg%3E"
const imgEarnParkLogo = "data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='%23FFB800' font-size='14' font-weight='bold'%3EEarnPark%3C/text%3E%3C/svg%3E"
const imgTrustSwapLogo = "data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3ETrustSwap%3C/text%3E%3C/svg%3E"
const imgTakadaoLogo = "data:image/svg+xml,%3Csvg width='100' height='30' viewBox='0 0 100 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3ETakadao%3C/text%3E%3C/svg%3E"
const imgFonbnkLogo = "data:image/svg+xml,%3Csvg width='100' height='30' viewBox='0 0 100 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='%2300FF5E' font-size='14' font-weight='bold'%3Efonbnk%3C/text%3E%3C/svg%3E"
const imgCoinprofileLogo = "data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3Ecoinprofile%3C/text%3E%3C/svg%3E"
const imgYellowCardLogo = "data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='%23FFB800' font-size='14' font-weight='bold'%3EYellow Card%3C/text%3E%3C/svg%3E"
const imgInkFinanceLogo = "data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3Eink.finance%3C/text%3E%3C/svg%3E"
const imgSESOLogo = "data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3ESESO GLOBAL%3C/text%3E%3C/svg%3E"
const imgKotaniLogo = "data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3EKotani Pay%3C/text%3E%3C/svg%3E"

// DEPIN / AI
const imgDCLogo = "data:image/svg+xml,%3Csvg width='60' height='30' viewBox='0 0 60 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3EDC%3C/text%3E%3C/svg%3E"
const imgZeshLogo = "data:image/svg+xml,%3Csvg width='80' height='30' viewBox='0 0 80 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='%234A90E2' font-size='14' font-weight='bold'%3EZesh%3C/text%3E%3C/svg%3E"
const imgSocialLiveLogo = "data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3ESocialLive%3C/text%3E%3C/svg%3E"
const imgCassavaLogo = "data:image/svg+xml,%3Csvg width='100' height='30' viewBox='0 0 100 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='%23FFB800' font-size='14' font-weight='bold'%3ECassava%3C/text%3E%3C/svg%3E"
const imgBrainedgeLogo = "data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='%2300FF5E' font-size='14' font-weight='bold'%3Ebrainedge%3C/text%3E%3C/svg%3E"
const imgDepinTechLogo = "data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='white' font-size='14' font-weight='bold'%3EDepinTech%3C/text%3E%3C/svg%3E"
const imgAiphantLogo = "data:image/svg+xml,%3Csvg width='100' height='30' viewBox='0 0 100 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='%23FF00FF' font-size='14' font-weight='bold'%3EAiphant%3C/text%3E%3C/svg%3E"

// Our Team section assets
const imgSowmyaAvatar = "data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='200' fill='%23333'/%3E%3Ccircle cx='100' cy='80' r='30' fill='%23666'/%3E%3Ccircle cx='100' cy='140' r='50' fill='%23666'/%3E%3C/svg%3E"
const imgVincentAvatar = "data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='200' fill='%23333'/%3E%3Ccircle cx='100' cy='80' r='30' fill='%23666'/%3E%3Ccircle cx='100' cy='140' r='50' fill='%23666'/%3E%3C/svg%3E"
const imgAnLuuAvatar = "data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='200' fill='%23333'/%3E%3Ccircle cx='100' cy='80' r='30' fill='%23666'/%3E%3Ccircle cx='100' cy='140' r='50' fill='%23666'/%3E%3C/svg%3E"
const imgHaiTongAvatar = "data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='200' fill='%23333'/%3E%3Ccircle cx='100' cy='80' r='30' fill='%23666'/%3E%3Ccircle cx='100' cy='140' r='50' fill='%23666'/%3E%3C/svg%3E"
const imgAldenAvatar = "data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='200' fill='%23333'/%3E%3Ccircle cx='100' cy='80' r='30' fill='%23666'/%3E%3Ccircle cx='100' cy='140' r='50' fill='%23666'/%3E%3C/svg%3E"
const imgLeonAvatar = "data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='200' fill='%23333'/%3E%3Ccircle cx='100' cy='80' r='30' fill='%23666'/%3E%3Ccircle cx='100' cy='140' r='50' fill='%23666'/%3E%3C/svg%3E"
const imgPanJunAvatar = "data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='200' fill='%23333'/%3E%3Ccircle cx='100' cy='80' r='30' fill='%23666'/%3E%3Ccircle cx='100' cy='140' r='50' fill='%23666'/%3E%3C/svg%3E"
const imgShogoAvatar = "data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='200' fill='%23333'/%3E%3Ccircle cx='100' cy='80' r='30' fill='%23666'/%3E%3Ccircle cx='100' cy='140' r='50' fill='%23666'/%3E%3C/svg%3E"


// Roadmap data structure
const roadmapData = [
  {
    id: 1,
    quarter: "Q1 2025",
    title: "Sui Integration and Ecosystem Expansion",
    gradient: "from-[#FF00FF] to-[#8B00FF]",
    shadowColor: "purple-500/20",
    items: [
      "Sui Hydropower Cohort membership",
      "Trading Competition Leaderboard",
      "$5,000 Monthly Minimum Guaranteed Addresses",
      "Launch SuiAI Growth",
      "20,000 Onchain Token Holders"
    ]
  },
  {
    id: 2,
    quarter: "Q2 2025",
    title: "Token Launch & Ecosystem Growth",
    gradient: "from-[#2A2A2A] to-[#1A1A1A]",
    shadowColor: "gray-500/20",
    border: "border-white/10 hover:border-white/20",
    items: [
      "$2M raise with $NODO token launch on Tier 1 & 2 exchanges",
      "Launch comprehensive AI Agent token staking program with multi-chain rewards",
      "Introduce governance features for token holders",
      "Onboarding Market Makers",
      "Launch of Binary Options Vaults"
    ]
  },
  {
    id: 3,
    quarter: "Q3 2025",
    title: "Cardano Integration & Social Trading",
    gradient: "from-[#4A90E2] to-[#357ABD]",
    shadowColor: "blue-500/20",
    items: [
      "Build AI agent marketplace with $NODO token staking model",
      "Launch a decentralized trader reputation system on DEX",
      "Implement AI-powered trade recommendations",
      "Launch social trading features with leaderboard for AI agent creators"
    ]
  },
  {
    id: 4,
    quarter: "Q4 2025",
    title: "Cross-Chain Expansion & DeFi Innovation",
    gradient: "from-[#00FF5E] to-[#00CC4A]",
    shadowColor: "green-500/20",
    items: [
      "Launch cross-chain AI agent deployment",
      "Integrate with major DeFi protocols",
      "Advanced analytics dashboard",
      "Community-driven AI agent development"
    ]
  }
];

export default function LandingPage() {
  // Vault carousel state
  const [currentVaultSlide, setCurrentVaultSlide] = useState(0);
  const vaultCarouselRef = useRef<HTMLDivElement>(null);
  
  // Roadmap state
  const [expandedRoadmapItems, setExpandedRoadmapItems] = useState<number[]>([]);
  const [roadmapProgress, setRoadmapProgress] = useState(0);
  const roadmapRef = useRef<HTMLDivElement>(null);
  
  
  
  
  // Roadmap interactivity
  const toggleRoadmapItem = (id: number) => {
    setExpandedRoadmapItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };
  
  // Scroll progress for roadmap
  useEffect(() => {
    const handleScroll = () => {
      if (roadmapRef.current) {
        const scrollLeft = roadmapRef.current.scrollLeft;
        const scrollWidth = roadmapRef.current.scrollWidth - roadmapRef.current.clientWidth;
        const progress = scrollLeft / scrollWidth;
        setRoadmapProgress(progress);
      }
    };
    
    const roadmapElement = roadmapRef.current;
    if (roadmapElement) {
      roadmapElement.addEventListener('scroll', handleScroll);
      return () => roadmapElement.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  // Auto-scroll detection for carousel

  return (
    <div className="min-h-screen bg-[#010101] text-white">
      {/* Enhanced Responsive Header */}
      <header className="relative">
        <div className="flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-4 sm:py-6 md:py-8">
          <div className="flex items-center justify-between w-full max-w-6xl xl:max-w-7xl 2xl:max-w-8xl">
            {/* Logo and Navigation */}
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">
              {/* NODO Logo */}
              <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 relative">
                <img 
                  src={imgNodoLogo} 
                  alt="NODO" 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain"
                />
              </div>
              
              {/* Navigation */}
              <div className="hidden md:flex items-center h-12 lg:h-14 xl:h-16 relative">
                <nav className="flex">
                  <div className="px-0 py-3 w-24 lg:w-28 xl:w-32 flex items-center justify-center relative">
                    <span className="text-white/70 font-dm-sans font-bold text-sm lg:text-base xl:text-lg">Token</span>
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#9DEBFF] to-[#00FF5E] bg-clip-text text-transparent">
                      <span className="text-xs lg:text-sm font-mono font-bold leading-normal px-1.5 py-1">COMING SOON</span>
                    </div>
                  </div>
                  <div className="px-0 py-3 w-24 lg:w-28 xl:w-32 flex items-center justify-center">
                    <span className="text-white/70 font-dm-sans font-bold text-sm lg:text-base xl:text-lg">Docs</span>
                  </div>
                  <div className="px-0 py-3 w-24 lg:w-28 xl:w-32 flex items-center justify-center">
                    <span className="text-white/70 font-dm-sans font-bold text-sm lg:text-base xl:text-lg">Contact</span>
                  </div>
                </nav>
              </div>
            </div>

            {/* Launch App Button */}
            <div className="flex justify-end">
              <Button 
                variant="outline" 
                size="lg"
                className="h-9 sm:h-10 md:h-11 lg:h-12 xl:h-14 rounded-xl border-[#ffe8c9] bg-transparent hover:bg-white/5 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10"
              >
                <span className="bg-gradient-to-r from-[#FFE8C9] via-[#F9F4E9] via-[#E3F6FF] to-[#C9D4FF] bg-clip-text text-transparent font-dm-sans font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                  Launch App
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Exact Figma Design */}
      <div className="bg-black relative w-full">
        {/* Background glows - hidden on mobile for performance */}
        <div className="hidden lg:block absolute left-[1018px] top-[210px] w-glow h-glow">
          <div className="absolute inset-0 -scale-[4]">
            <img alt="Background glow" className="block max-w-none w-full h-full" src={imgEllipseGlow} />
          </div>
        </div>
        <div className="hidden lg:block absolute left-[1018px] top-[210px] w-glow h-glow">
          <div className="absolute inset-0 -scale-[4]">
            <img alt="Background glow" className="block max-w-none w-full h-full" src={imgEllipseGlow} />
          </div>
        </div>

        {/* Main hero content */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between pt-8 sm:pt-12 md:pt-[60px] pb-0 px-4 sm:px-6 md:px-8 lg:px-0 relative w-full max-w-[1040px] mx-auto">
          {/* Left Content */}
          <div className="flex flex-col gap-6 sm:gap-8 items-start justify-start p-0 relative w-full lg:w-[515px]">
            <h1 className="font-dm-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.03] text-left tracking-[-0.02em] lg:tracking-[-1.68px] bg-gradient-to-r from-[#FFE8C9] via-[#F9F4E9] via-[#E3F6FF] to-[#C9D4FF] bg-clip-text text-transparent">
              DeFAI Agentic Ecosystem
            </h1>
            
            <p className="font-dm-mono text-sm sm:text-base md:text-lg lg:text-[18px] leading-[1.4] text-left tracking-[-0.01em] lg:tracking-[-0.36px] text-white opacity-80">
              We build autonomous AIs on Sui to bring unparalleled on-chain efficiency to builders, institutions, and investors.
            </p>
            
            <div className="flex flex-row gap-4 sm:gap-6 lg:gap-8 items-center justify-start lg:justify-end p-0 relative w-full sm:w-auto lg:w-[198px]">
              <div className="w-full sm:w-auto sm:grow h-10 sm:h-11 rounded-xl bg-gradient-to-r from-[#FFE8C9] via-[#F9F4E9] via-[#E3F6FF] to-[#C9D4FF]">
                <div className="flex flex-col items-center justify-center relative w-full h-full">
                  <div className="flex flex-col gap-2.5 h-10 sm:h-11 items-center justify-center px-4 py-2 relative w-full">
                    <div className="flex flex-row items-center justify-start p-0 relative">
                      <p className="font-dm-sans font-semibold text-sm sm:text-base lg:text-[18px] leading-[1.1] text-center text-[#0a080e]">
                        Launch App
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="relative mt-8 lg:mt-0 mx-auto lg:mx-0">
            <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-hero-sphere h-[250px] sm:h-[300px] md:h-[350px] lg:h-hero-sphere relative">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${imgHeroSphere}')`,
                  maskImage: `url('${imgHeroSphereMask}')`,
                  maskSize: 'contain'
                }}
              />
              <div 
                className="absolute inset-0 bg-gradient-to-r from-[#FF00A6] via-[#FF00C8] via-[#FF00FF] via-[#C400FF] via-[#4A28FF] via-[#002FFF] via-[#0078FF] via-[#00C4FF] to-[#00FFFF] mix-blend-hue"
                style={{
                  maskImage: `url('${imgHeroSphereMask}')`,
                  maskSize: 'contain',
                  maskPosition: 'center'
                }}
              />
            </div>
          </div>
        </div>

        {/* Trading Cards - Grid Aligned with Headline */}
        <div className="relative w-full mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <div className="w-full max-w-[1040px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
            {/* Desktop Grid / Mobile Carousel */}
            <div className="hidden lg:flex flex-row gap-6 items-start justify-center p-0 relative">
                
                {/* First Card - WAL - SUI */}
                <div className="flex flex-col items-start gap-2.5 flex-1 p-2 rounded-3xl border border-white/80">
                  <div className="flex flex-col justify-center items-start gap-4 self-stretch px-4 py-6 rounded-[20px] border border-[#FFE8C9] bg-gradient-to-br from-[#4A4A4A] via-[#000000] to-[#666666]">
                    
                    {/* Token Icons */}
                    <div className="flex flex-row items-center justify-start pl-0 pr-[6.667px] py-0 relative">
                      <div className="bg-black mr-[-6.667px] relative rounded-full w-10 h-10 border border-white">
                        <div className="absolute inset-0 rounded-full overflow-hidden">
                          <img alt="CETUS icon" className="w-full h-full object-cover" src={imgCetusIcon} />
                          <div className="absolute inset-0 bg-center bg-cover" style={{backgroundImage: `url('${imgWalIcon}')`}} />
                        </div>
                      </div>
                      <div className="bg-white mr-[-6.667px] relative rounded-full w-10 h-10">
                        <div className="flex flex-row items-center justify-center relative w-full h-full">
                          <div className="flex flex-row-reverse items-center justify-center relative w-10 h-10">
                            <div className="h-[27.467px] w-[7.467px] relative">
                              <div className="absolute w-[27.467px] h-[27.467px] bg-center bg-cover left-1/2 top-0 -translate-x-1/2" style={{backgroundImage: `url('${imgSuiIcon}')`}} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pair Name */}
                    <div className="flex flex-col items-center justify-center w-full">
                      <div className="font-dm-mono font-medium text-sm sm:text-base md:text-lg lg:text-[18px] leading-[1.2] text-center text-white tracking-[-0.02em] lg:tracking-[-0.6px]">
                        <p className="leading-normal">WAL - SUI</p>
                      </div>
                    </div>

                    {/* Performance */}
                    <div className="flex flex-row items-center justify-center w-full">
                      <div className="font-dm-mono font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.2] text-center text-transparent tracking-[-0.03em] lg:tracking-[-1.2px] bg-gradient-to-r from-[#9DEBFF] to-[#00FF5E] bg-clip-text">
                        <p className="leading-[1.2] whitespace-pre">189.84%</p>
                      </div>
                    </div>

                    {/* Bluefin Logo */}
                    <div className="flex flex-row items-center justify-center w-full">
                      <div className="h-6 w-[107.48px] relative">
                        <div className="absolute bottom-0 left-0 right-[70.227%] top-0">
                          <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector1} />
                        </div>
                        <div className="absolute bottom-[15.552%] left-[90.194%] right-0 top-[32.22%]">
                          <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector2} />
                        </div>
                        <div className="absolute bottom-[15.572%] left-[85.861%] right-[11.756%] top-[14.067%]">
                          <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector3} />
                        </div>
                        <div className="absolute bottom-[15.558%] left-[77.604%] right-[15.12%] top-[12.948%]">
                          <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector4} />
                        </div>
                        <div className="absolute bottom-[14.419%] left-[65.873%] right-[23.056%] top-[32.22%]">
                          <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector5} />
                        </div>
                        <div className="absolute bottom-[14.433%] left-[54.591%] right-[35.602%] top-[33.34%]">
                          <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector6} />
                        </div>
                        <div className="absolute bottom-[15.558%] left-[50.5%] right-[47.117%] top-[12.948%]">
                          <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector7} />
                        </div>
                        <div className="absolute bottom-[14.425%] left-[37.211%] right-[50.98%] top-[12.948%]">
                          <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector8} />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Second Card - DEEP - SUI */}
                <div className="flex flex-col items-start gap-2.5 flex-1 p-2 rounded-3xl border border-white/80">
                  <div className="flex flex-col justify-center items-start gap-4 self-stretch px-4 py-6 rounded-[20px] border border-[#FFE8C9] bg-gradient-to-br from-[#4A4A4A] via-[#000000] to-[#666666]">
                    
                    {/* Token Icons */}
                    <div className="flex flex-row items-center justify-start pl-0 pr-[6.667px] py-0 relative">
                      <div className="bg-center bg-cover bg-no-repeat mr-[-6.667px] rounded-full w-10 h-10" style={{backgroundImage: `url('${imgDeepIcon}')`}} />
                      <div className="bg-white mr-[-6.667px] relative rounded-full w-10 h-10">
                        <div className="flex flex-row items-center justify-center relative w-full h-full">
                          <div className="flex flex-row-reverse items-center justify-center relative w-10 h-10">
                            <div className="h-[27.467px] w-[7.467px] relative">
                              <div className="absolute w-[27.467px] h-[27.467px] bg-center bg-cover left-1/2 top-0 -translate-x-1/2" style={{backgroundImage: `url('${imgSuiIcon}')`}} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pair Name */}
                    <div className="flex flex-col items-center justify-center w-full">
                      <div className="font-dm-mono font-medium text-sm sm:text-base md:text-lg lg:text-[18px] leading-[1.2] text-center text-white tracking-[-0.02em] lg:tracking-[-0.6px]">
                        <p className="leading-normal">DEEP - SUI</p>
                      </div>
                    </div>

                    {/* Performance */}
                    <div className="flex flex-row items-center justify-center w-full">
                      <div className="font-dm-mono font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.2] text-center text-transparent tracking-[-0.03em] lg:tracking-[-1.2px] bg-gradient-to-r from-[#9DEBFF] to-[#00FF5E] bg-clip-text">
                        <p className="leading-[1.2] whitespace-pre">18.94%</p>
                      </div>
                    </div>

                    {/* Bluefin Logo */}
                    <div className="flex flex-row items-center justify-center w-full">
                      <div className="h-6 w-[107.48px] relative">
                        <div className="absolute bottom-0 left-0 right-[70.227%] top-0">
                          <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector1} />
                        </div>
                        <div className="absolute bottom-[15.552%] left-[90.194%] right-0 top-[32.22%]">
                          <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector2} />
                        </div>
                        <div className="absolute bottom-[15.572%] left-[85.861%] right-[11.756%] top-[14.067%]">
                          <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector3} />
                        </div>
                        <div className="absolute bottom-[15.558%] left-[77.604%] right-[15.12%] top-[12.948%]">
                          <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector4} />
                        </div>
                        <div className="absolute bottom-[14.419%] left-[65.873%] right-[23.056%] top-[32.22%]">
                          <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector5} />
                        </div>
                        <div className="absolute bottom-[14.433%] left-[54.591%] right-[35.602%] top-[33.34%]">
                          <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector6} />
                        </div>
                        <div className="absolute bottom-[15.558%] left-[50.5%] right-[47.117%] top-[12.948%]">
                          <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector7} />
                        </div>
                        <div className="absolute bottom-[14.425%] left-[37.211%] right-[50.98%] top-[12.948%]">
                          <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector8} />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Third Card - SUI - USDC */}
                <div className="flex flex-col items-start gap-2.5 flex-1 p-2 rounded-3xl border border-white/80">
                  <div className="flex flex-col justify-center items-start gap-4 self-stretch px-4 py-6 rounded-[20px] border border-[#FFE8C9] bg-gradient-to-br from-[#4A4A4A] via-[#000000] to-[#666666]">
                    
                    {/* Token Icons */}
                    <div className="flex flex-row items-center justify-start pl-0 pr-[6.667px] py-0 relative">
                      <div className="bg-white mr-[-6.667px] relative rounded-full w-10 h-10">
                        <div className="flex flex-row items-center justify-center relative w-full h-full">
                          <div className="flex flex-row-reverse items-center justify-center relative w-10 h-10">
                            <div className="h-[27.467px] w-[7.467px] relative">
                              <div className="absolute w-[27.467px] h-[27.467px] bg-center bg-cover left-1/2 top-0 -translate-x-1/2" style={{backgroundImage: `url('${imgSuiIcon}')`}} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mr-[-6.667px] relative w-10 h-10">
                        <img alt="USDC token icon" className="block max-w-none w-full h-full" src={imgUsdcIcon} />
                      </div>
                    </div>

                    {/* Pair Name */}
                    <div className="flex flex-col items-center justify-center w-full">
                      <div className="font-dm-mono font-medium text-sm sm:text-base md:text-lg lg:text-[18px] leading-[1.2] text-center text-white tracking-[-0.02em] lg:tracking-[-0.6px]">
                        <p className="leading-normal">SUI - USDC</p>
                      </div>
                    </div>

                    {/* Performance */}
                    <div className="flex flex-row items-center justify-center w-full">
                      <div className="font-dm-mono font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.2] text-center text-transparent tracking-[-0.03em] lg:tracking-[-1.2px] bg-gradient-to-r from-[#9DEBFF] to-[#00FF5E] bg-clip-text">
                        <p className="leading-[1.2] whitespace-pre">440%</p>
                      </div>
                    </div>

                    {/* Bluefin Logo */}
                    <div className="flex flex-row items-center justify-center w-full">
                      <div className="h-5 w-[89.567px] relative">
                        <div className="absolute bottom-0 left-0 right-[70.227%] top-0">
                          <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector9} />
                        </div>
                        <div className="absolute bottom-[15.552%] left-[90.194%] right-0 top-[32.22%]">
                          <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector10} />
                        </div>
                        <div className="absolute bottom-[15.572%] left-[85.861%] right-[11.756%] top-[14.067%]">
                          <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector11} />
                        </div>
                        <div className="absolute bottom-[15.558%] left-[77.604%] right-[15.12%] top-[12.948%]">
                          <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector12} />
                        </div>
                        <div className="absolute bottom-[14.419%] left-[65.873%] right-[23.056%] top-[32.22%]">
                          <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector13} />
                        </div>
                        <div className="absolute bottom-[14.433%] left-[54.591%] right-[35.602%] top-[33.34%]">
                          <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector14} />
                        </div>
                        <div className="absolute bottom-[15.558%] left-[50.5%] right-[47.117%] top-[12.948%]">
                          <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector15} />
                        </div>
                        <div className="absolute bottom-[14.425%] left-[37.211%] right-[50.98%] top-[12.948%]">
                          <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector16} />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
            
            {/* Mobile/Tablet Carousel */}
            <div className="lg:hidden relative">
              <div 
                ref={vaultCarouselRef}
                className="overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                <div className="flex gap-4" style={{ width: `${300}%` }}>
                  {/* First Card - WAL - SUI */}
                  <div className="flex-shrink-0 w-full snap-center px-4">
                    <div className="flex flex-col items-start gap-2.5 p-2 rounded-3xl border border-white/80 max-w-[320px] mx-auto">
                      <div className="flex flex-col justify-center items-start gap-4 self-stretch px-4 py-6 rounded-[20px] border border-[#FFE8C9] bg-gradient-to-br from-[#4A4A4A] via-[#000000] to-[#666666]">
                        {/* Token Icons */}
                        <div className="flex flex-row items-center justify-start pl-0 pr-[6.667px] py-0 relative">
                          <div className="bg-black mr-[-6.667px] relative rounded-full w-10 h-10 border border-white">
                            <div className="absolute inset-0 rounded-full overflow-hidden">
                              <img alt="CETUS icon" className="w-full h-full object-cover" src={imgCetusIcon} />
                              <div className="absolute inset-0 bg-center bg-cover" style={{backgroundImage: `url('${imgWalIcon}')`}} />
                            </div>
                          </div>
                          <div className="bg-white mr-[-6.667px] relative rounded-full w-10 h-10">
                            <div className="flex flex-row items-center justify-center relative w-full h-full">
                              <div className="flex flex-row-reverse items-center justify-center relative w-10 h-10">
                                <div className="h-[27.467px] w-[7.467px] relative">
                                  <div className="absolute w-[27.467px] h-[27.467px] bg-center bg-cover left-1/2 top-0 -translate-x-1/2" style={{backgroundImage: `url('${imgSuiIcon}')`}} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Pair Name */}
                        <div className="flex flex-col items-center justify-center w-full">
                          <div className="font-dm-mono font-medium text-sm sm:text-base leading-[1.2] text-center text-white tracking-[-0.02em]">
                            <p className="leading-normal">WAL - SUI</p>
                          </div>
                        </div>
                        {/* Performance */}
                        <div className="flex flex-row items-center justify-center w-full">
                          <div className="font-dm-mono font-medium text-2xl sm:text-3xl leading-[1.2] text-center text-transparent tracking-[-0.03em] bg-gradient-to-r from-[#9DEBFF] to-[#00FF5E] bg-clip-text">
                            <p className="leading-[1.2] whitespace-pre">189.84%</p>
                          </div>
                        </div>
                        {/* Bluefin Logo */}
                        <div className="flex flex-row items-center justify-center w-full">
                          <div className="h-6 w-[107.48px] relative">
                            <div className="absolute bottom-0 left-0 right-[70.227%] top-0">
                              <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector1} />
                            </div>
                            <div className="absolute bottom-[15.552%] left-[90.194%] right-0 top-[32.22%]">
                              <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector2} />
                            </div>
                            <div className="absolute bottom-[15.572%] left-[85.861%] right-[11.756%] top-[14.067%]">
                              <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector3} />
                            </div>
                            <div className="absolute bottom-[15.558%] left-[77.604%] right-[15.12%] top-[12.948%]">
                              <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector4} />
                            </div>
                            <div className="absolute bottom-[14.419%] left-[65.873%] right-[23.056%] top-[32.22%]">
                              <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector5} />
                            </div>
                            <div className="absolute bottom-[14.433%] left-[54.591%] right-[35.602%] top-[33.34%]">
                              <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector6} />
                            </div>
                            <div className="absolute bottom-[15.558%] left-[50.5%] right-[47.117%] top-[12.948%]">
                              <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector7} />
                            </div>
                            <div className="absolute bottom-[14.425%] left-[37.211%] right-[50.98%] top-[12.948%]">
                              <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector8} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Second Card - DEEP - SUI */}
                  <div className="flex-shrink-0 w-full snap-center px-4">
                    <div className="flex flex-col items-start gap-2.5 p-2 rounded-3xl border border-white/80 max-w-[320px] mx-auto">
                      <div className="flex flex-col justify-center items-start gap-4 self-stretch px-4 py-6 rounded-[20px] border border-[#FFE8C9] bg-gradient-to-br from-[#4A4A4A] via-[#000000] to-[#666666]">
                        {/* Token Icons */}
                        <div className="flex flex-row items-center justify-start pl-0 pr-[6.667px] py-0 relative">
                          <div className="bg-center bg-cover bg-no-repeat mr-[-6.667px] rounded-full w-10 h-10" style={{backgroundImage: `url('${imgDeepIcon}')`}} />
                          <div className="bg-white mr-[-6.667px] relative rounded-full w-10 h-10">
                            <div className="flex flex-row items-center justify-center relative w-full h-full">
                              <div className="flex flex-row-reverse items-center justify-center relative w-10 h-10">
                                <div className="h-[27.467px] w-[7.467px] relative">
                                  <div className="absolute w-[27.467px] h-[27.467px] bg-center bg-cover left-1/2 top-0 -translate-x-1/2" style={{backgroundImage: `url('${imgSuiIcon}')`}} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Pair Name */}
                        <div className="flex flex-col items-center justify-center w-full">
                          <div className="font-dm-mono font-medium text-sm sm:text-base leading-[1.2] text-center text-white tracking-[-0.02em]">
                            <p className="leading-normal">DEEP - SUI</p>
                          </div>
                        </div>
                        {/* Performance */}
                        <div className="flex flex-row items-center justify-center w-full">
                          <div className="font-dm-mono font-medium text-2xl sm:text-3xl leading-[1.2] text-center text-transparent tracking-[-0.03em] bg-gradient-to-r from-[#9DEBFF] to-[#00FF5E] bg-clip-text">
                            <p className="leading-[1.2] whitespace-pre">18.94%</p>
                          </div>
                        </div>
                        {/* Bluefin Logo - Same structure as first card */}
                        <div className="flex flex-row items-center justify-center w-full">
                          <div className="h-6 w-[107.48px] relative">
                            <div className="absolute bottom-0 left-0 right-[70.227%] top-0">
                              <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector1} />
                            </div>
                            <div className="absolute bottom-[15.552%] left-[90.194%] right-0 top-[32.22%]">
                              <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector2} />
                            </div>
                            <div className="absolute bottom-[15.572%] left-[85.861%] right-[11.756%] top-[14.067%]">
                              <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector3} />
                            </div>
                            <div className="absolute bottom-[15.558%] left-[77.604%] right-[15.12%] top-[12.948%]">
                              <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector4} />
                            </div>
                            <div className="absolute bottom-[14.419%] left-[65.873%] right-[23.056%] top-[32.22%]">
                              <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector5} />
                            </div>
                            <div className="absolute bottom-[14.433%] left-[54.591%] right-[35.602%] top-[33.34%]">
                              <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector6} />
                            </div>
                            <div className="absolute bottom-[15.558%] left-[50.5%] right-[47.117%] top-[12.948%]">
                              <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector7} />
                            </div>
                            <div className="absolute bottom-[14.425%] left-[37.211%] right-[50.98%] top-[12.948%]">
                              <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector8} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Third Card - SUI - USDC */}
                  <div className="flex-shrink-0 w-full snap-center px-4">
                    <div className="flex flex-col items-start gap-2.5 p-2 rounded-3xl border border-white/80 max-w-[320px] mx-auto">
                      <div className="flex flex-col justify-center items-start gap-4 self-stretch px-4 py-6 rounded-[20px] border border-[#FFE8C9] bg-gradient-to-br from-[#4A4A4A] via-[#000000] to-[#666666]">
                        {/* Token Icons */}
                        <div className="flex flex-row items-center justify-start pl-0 pr-[6.667px] py-0 relative">
                          <div className="bg-white mr-[-6.667px] relative rounded-full w-10 h-10">
                            <div className="flex flex-row items-center justify-center relative w-full h-full">
                              <div className="flex flex-row-reverse items-center justify-center relative w-10 h-10">
                                <div className="h-[27.467px] w-[7.467px] relative">
                                  <div className="absolute w-[27.467px] h-[27.467px] bg-center bg-cover left-1/2 top-0 -translate-x-1/2" style={{backgroundImage: `url('${imgSuiIcon}')`}} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mr-[-6.667px] relative w-10 h-10">
                            <img alt="USDC token icon" className="block max-w-none w-full h-full" src={imgUsdcIcon} />
                          </div>
                        </div>
                        {/* Pair Name */}
                        <div className="flex flex-col items-center justify-center w-full">
                          <div className="font-dm-mono font-medium text-sm sm:text-base leading-[1.2] text-center text-white tracking-[-0.02em]">
                            <p className="leading-normal">SUI - USDC</p>
                          </div>
                        </div>
                        {/* Performance */}
                        <div className="flex flex-row items-center justify-center w-full">
                          <div className="font-dm-mono font-medium text-2xl sm:text-3xl leading-[1.2] text-center text-transparent tracking-[-0.03em] bg-gradient-to-r from-[#9DEBFF] to-[#00FF5E] bg-clip-text">
                            <p className="leading-[1.2] whitespace-pre">440%</p>
                          </div>
                        </div>
                        {/* Bluefin Logo */}
                        <div className="flex flex-row items-center justify-center w-full">
                          <div className="h-5 w-[89.567px] relative">
                            <div className="absolute bottom-0 left-0 right-[70.227%] top-0">
                              <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector9} />
                            </div>
                            <div className="absolute bottom-[15.552%] left-[90.194%] right-0 top-[32.22%]">
                              <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector10} />
                            </div>
                            <div className="absolute bottom-[15.572%] left-[85.861%] right-[11.756%] top-[14.067%]">
                              <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector11} />
                            </div>
                            <div className="absolute bottom-[15.558%] left-[77.604%] right-[15.12%] top-[12.948%]">
                              <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector12} />
                            </div>
                            <div className="absolute bottom-[14.419%] left-[65.873%] right-[23.056%] top-[32.22%]">
                              <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector13} />
                            </div>
                            <div className="absolute bottom-[14.433%] left-[54.591%] right-[35.602%] top-[33.34%]">
                              <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector14} />
                            </div>
                            <div className="absolute bottom-[15.558%] left-[50.5%] right-[47.117%] top-[12.948%]">
                              <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector15} />
                            </div>
                            <div className="absolute bottom-[14.425%] left-[37.211%] right-[50.98%] top-[12.948%]">
                              <img alt="Bluefin logo decoration" className="block max-w-none w-full h-full" src={imgBluefinVector16} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Carousel Indicators */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentVaultSlide === index 
                        ? 'w-6 bg-gradient-to-r from-[#9DEBFF] to-[#00FF5E]' 
                        : 'w-2 bg-white/20'
                    }`}
                    onClick={() => {
                      if (vaultCarouselRef.current) {
                        const slideWidth = vaultCarouselRef.current.scrollWidth / 3;
                        vaultCarouselRef.current.scrollTo({
                          left: slideWidth * index,
                          behavior: 'smooth'
                        });
                        setCurrentVaultSlide(index);
                      }
                    }}
                    aria-label={`Go to vault ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>


      {/* Footer Section */}
      <footer className="px-4 sm:px-8 md:px-[200px]">
        <div className="max-w-[1040px] mx-auto">
          {/* TVL Section */}
          <div className="bg-black rounded-t-[24px] backdrop-blur-[20.45px] p-4 sm:p-6 md:p-9 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
              {/* Fish Icon */}
              <div className="w-24 h-16 sm:w-32 sm:h-20 md:w-[170.305px] md:h-[102.593px] relative overflow-hidden flex-shrink-0">
                <img 
                  src={imgFishIcon} 
                  alt="Fish" 
                  className="absolute -left-[10.26px] -top-[36.977px] w-fish-icon h-fish-icon object-cover scale-50 sm:scale-75 md:scale-100"
                />
              </div>
              
              {/* TVL Amount */}
              <div className="text-center flex-1">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-dm-mono tracking-[-1.44px] text-white">
                  $1,012,924
                </div>
                <div className="text-sm sm:text-base md:text-lg lg:text-[18px] font-dm-mono font-medium text-white/80 uppercase tracking-normal">
                  TOTAL VALUE LOCKED
                </div>
              </div>
              
              {/* Launch App Button */}
              <div className="flex justify-end flex-shrink-0">
                <Button 
                  size="lg"
                  className="h-10 sm:h-11 rounded-xl bg-gradient-to-r from-[#FFE8C9] via-[#F9F4E9] via-[#E3F6FF] to-[#C9D4FF] text-[#0a080e] font-dm-sans font-semibold text-base sm:text-lg lg:text-[18px] hover:opacity-90 px-4 sm:px-6"
                >
                  Launch App
                </Button>
              </div>
            </div>
          </div>

          {/* Partners Section */}
          <div className="bg-black border-t border-neutral-700">
            <div className="p-4 sm:p-6 text-center">
              <div className="text-[10px] sm:text-[12px] font-dm-mono text-white/80 uppercase tracking-[1.08px] mb-3">
                Strategic Integration Partners
              </div>
              <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-[26.83px] flex-wrap">
                <img src={imgCetusLogo} alt="Cetus" className="h-6 sm:h-7 md:h-[30.713px]" />
                <img src={imgMomentumLogo} alt="Momentum" className="h-5 sm:h-6 md:h-[23.893px]" />
                <img src={imgCnsLogo} alt="CNS" className="h-4 sm:h-5 md:h-[20.916px]" />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bg-black border-t border-neutral-700 rounded-b-[24px] flex flex-col md:flex-row">
            {/* Audited By */}
            <div className="flex-1 p-4 sm:p-6 md:border-r border-neutral-700">
              <div className="text-center">
                <div className="text-[10px] sm:text-[12px] font-dm-mono text-white/80 uppercase tracking-[1.08px] mb-3">
                  Audited by
                </div>
                <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-[30.261px] flex-wrap">
                  <img src={imgCnsLogo} alt="CNS" className="h-5 sm:h-6 md:h-[25.217px]" />
                  <img src={imgQuillauditsLogo} alt="QuillAudits" className="h-5 sm:h-6 md:h-[25.217px]" />
                  <div className="flex items-center gap-1 sm:gap-2 md:gap-[4.522px]">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-[27.134px] md:h-[27.134px] rounded-full bg-gray-600" />
                    <span className="text-white font-dm-sans font-semibold text-sm sm:text-base md:text-lg lg:text-[23.7418px]">
                      Hashlock
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured in Media */}
            <div className="flex-1 p-4 sm:p-6 border-t md:border-t-0 border-neutral-700">
              <div className="text-center">
                <div className="text-[10px] sm:text-[12px] font-dm-mono text-white/80 uppercase tracking-[1.08px] mb-3">
                  Featured in Media
                </div>
                <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-[26.986px] flex-wrap">
                  <img src={imgTelegraphLogo} alt="Telegraph" className="h-7 sm:h-8 md:h-[35.982px]" />
                  <img src={imgCryptopolitanLogo} alt="Cryptopolitan" className="h-6 sm:h-7 md:h-[32.02px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Features Section */}
      <section className="bg-[#010101] relative">
        <div className="px-4 sm:px-8 md:px-[200px] py-16 sm:py-24 md:py-40">
          <div className="max-w-[1040px] mx-auto">
            {/* Header - Full Width */}
            <div className="text-left mb-16 sm:mb-20 lg:mb-24">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-dm-sans font-bold leading-[1.2] tracking-[-1px] lg:tracking-[-1.68px] bg-gradient-to-r from-[#FFE8C9] via-[#F9F4E9] via-[#E3F6FF] to-[#C9D4FF] bg-clip-text text-transparent mb-3">
                Accelerate Your Yields with DeFAI
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-[18px] font-dm-mono text-white/80 tracking-[-0.36px] leading-[1.2]">
                Revolutionizing DeFi with Autonomous Onchain Efficiency
              </p>
            </div>

            {/* Features Grid - Full Width Container */}
            <div className="space-y-16 sm:space-y-20 lg:space-y-24">
              {/* Feature 1: Monitor & manage your positions 24x7 */}
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Text Content - Left Column */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-dm-sans font-medium leading-[1.2] tracking-[-1px] lg:tracking-[-1.08px] bg-gradient-to-r from-[#FFE8C9] via-[#F9F4E9] via-[#E3F6FF] to-[#C9D4FF] bg-clip-text text-transparent">
                        Monitor & manage your positions 24x7
                      </h3>
                      <p className="text-sm sm:text-base lg:text-[16px] font-dm-sans text-white/80 tracking-[-0.48px] leading-[1.4]">
                        Deposit, withdraw, track returns, and stay optimally positioned with NODO's on-chain agents managing everything for you.
                      </p>
                    </div>
                    
                    {/* Launch App Button */}
                    <div className="flex justify-start">
                      <Button 
                        size="lg"
                        className="h-10 sm:h-11 rounded-xl bg-gradient-to-r from-[#FFE8C9] via-[#F9F4E9] via-[#E3F6FF] to-[#C9D4FF] text-[#0a080e] font-dm-sans font-semibold text-base sm:text-lg lg:text-[18px] hover:opacity-90 px-6"
                      >
                        Launch App
                      </Button>
                    </div>
                    
                    {/* Audited By Section */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                      <span className="text-xs sm:text-sm lg:text-[14px] font-dm-sans text-white/75">Audited by</span>
                      <div className="flex items-center gap-2 sm:gap-4">
                        <img src={imgQuillauditsLogo} alt="QuillAudits" className="h-4 sm:h-5" />
                        <div className="flex items-center gap-1 sm:gap-2">
                          <div className="w-5 h-5 sm:w-[22px] sm:h-[22px] bg-gray-600 rounded-full" />
                          <span className="text-base sm:text-lg lg:text-[20px] font-dm-sans font-semibold text-white">
                            Hashlock
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual Content - Right Column */}
                  <div className="w-full h-80 sm:h-96 lg:h-[420px] relative">
                    <div className="absolute bottom-0 left-0">
                      <img src={imgGlowEffect} alt="Glow" className="w-80 sm:w-96 lg:w-[403px] h-16 sm:h-20 lg:h-[81px]" />
                    </div>
                    <div className="absolute bottom-[50px] sm:bottom-[60px] lg:bottom-[67px] right-0 lg:right-[50px] w-56 sm:w-64 lg:w-[320px] h-56 sm:h-64 lg:h-[320px] overflow-hidden">
                      <img src={imgDashboard} alt="Dashboard" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute bottom-[70px] sm:bottom-[85px] lg:bottom-[97px] left-[30px] sm:left-[45px] lg:left-[56px] w-20 sm:w-24 lg:w-[140px] h-32 sm:h-40 lg:h-[220px] overflow-hidden">
                      <img src={imgFeatureFish} alt="Fish" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2: Stay in range, automatically */}
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Text Content - Right Column on Desktop */}
                  <div className="space-y-6 lg:order-2">
                    <div className="space-y-4">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-dm-sans font-medium leading-[1.2] tracking-[-1px] lg:tracking-[-1.08px] bg-gradient-to-r from-[#FFE8C9] via-[#F9F4E9] via-[#E3F6FF] to-[#C9D4FF] bg-clip-text text-transparent">
                        Stay in range, automatically
                      </h3>
                      <p className="text-sm sm:text-base lg:text-[16px] font-dm-sans text-white/80 tracking-[-0.48px] leading-[1.4]">
                        NODO keeps your capital in optimal ranges 24/7, automatically adapting to market shifts for consistent fee capture.
                      </p>
                    </div>
                    
                    {/* Launch App Button */}
                    <div className="flex justify-start">
                      <Button 
                        size="lg"
                        className="h-10 sm:h-11 rounded-xl bg-gradient-to-r from-[#FFE8C9] via-[#F9F4E9] via-[#E3F6FF] to-[#C9D4FF] text-[#0a080e] font-dm-sans font-semibold text-base sm:text-lg lg:text-[18px] hover:opacity-90 px-6"
                      >
                        Launch App
                      </Button>
                    </div>
                  </div>
                  
                  {/* Visual Content - Left Column on Desktop */}
                  <div className="w-full h-80 sm:h-96 lg:h-[420px] relative lg:order-1">
                    <div className="absolute bottom-0 left-0">
                      <img src={imgGlowEffect} alt="Glow" className="w-80 sm:w-96 lg:w-[403px] h-16 sm:h-20 lg:h-[81px]" />
                    </div>
                    <div className="absolute top-[20px] sm:top-[25px] lg:top-[27px] right-0 lg:right-[50px] w-48 sm:w-56 lg:w-[280px] h-48 sm:h-56 lg:h-[280px] overflow-hidden">
                      <img src={imgChart} alt="Chart" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute top-[65px] sm:top-[80px] lg:top-[91px] left-[30px] sm:left-[45px] lg:left-[56px] w-28 sm:w-32 lg:w-[160px] h-40 sm:h-48 lg:h-[220px] overflow-hidden">
                      <img src={imgFeatureFish} alt="Fish" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 3: Vault profits auto-reinvest */}
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Text Content - Left Column */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-dm-sans font-medium leading-[1.2] tracking-[-1px] lg:tracking-[-1.08px] bg-gradient-to-r from-[#FFE8C9] via-[#F9F4E9] via-[#E3F6FF] to-[#C9D4FF] bg-clip-text text-transparent">
                        Vault profits auto-reinvest
                      </h3>
                      <p className="text-sm sm:text-base lg:text-[16px] font-dm-sans text-white/80 tracking-[-0.48px] leading-[1.4]">
                        Vault profits are automatically reinvested into the vault, increasing your share value over time
                      </p>
                    </div>
                    
                    {/* Learn More Button */}
                    <div className="flex justify-start">
                      <Button 
                        variant="outline"
                        size="lg"
                        className="h-10 sm:h-11 rounded-xl border-[#ffe8c9] bg-transparent hover:bg-white/5 px-6"
                      >
                        <span className="bg-gradient-to-r from-[#ffe2c4] to-[#e8f3ff] bg-clip-text text-transparent font-dm-sans font-semibold text-base sm:text-lg lg:text-[18px]">
                          Learn more
                        </span>
                      </Button>
                    </div>
                    
                    {/* Audited By Section */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                      <span className="text-xs sm:text-sm lg:text-[14px] font-dm-sans text-white/75">Audited by</span>
                      <div className="flex items-center gap-2 sm:gap-4">
                        <img src={imgQuillauditsLogo} alt="QuillAudits" className="h-4 sm:h-5" />
                        <div className="flex items-center gap-1 sm:gap-2">
                          <div className="w-5 h-5 sm:w-[22px] sm:h-[22px] bg-gray-600 rounded-full" />
                          <span className="text-base sm:text-lg lg:text-[20px] font-dm-sans font-semibold text-white">
                            Hashlock
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual Content - Right Column */}
                  <div className="w-full h-80 sm:h-96 lg:h-[420px] relative">
                    <div className="absolute bottom-0 left-0">
                      <img src={imgGlowEffect} alt="Glow" className="w-80 sm:w-96 lg:w-[403px] h-16 sm:h-20 lg:h-[81px]" />
                    </div>
                    <div className="absolute top-[30px] sm:top-[35px] lg:top-[39px] right-0 lg:right-[50px] w-44 sm:w-52 lg:w-[260px] h-44 sm:h-52 lg:h-[260px] overflow-hidden">
                      <img src={imgVault} alt="Vault" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute top-[70px] sm:top-[85px] lg:top-[100px] left-[30px] sm:left-[45px] lg:left-[56px] w-28 sm:w-32 lg:w-[160px] h-36 sm:h-44 lg:h-[200px] overflow-hidden">
                      <img src={imgFeatureFish} alt="Fish" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 4: Reduce IL. Optimise exits */}
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Text Content - Right Column on Desktop */}
                  <div className="space-y-6 lg:order-2">
                    <div className="space-y-4">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-dm-sans font-medium leading-[1.2] tracking-[-1px] lg:tracking-[-1.08px] bg-gradient-to-r from-[#FFE8C9] via-[#F9F4E9] via-[#E3F6FF] to-[#C9D4FF] bg-clip-text text-transparent">
                        Reduce IL. Optimise exits
                      </h3>
                      <p className="text-sm sm:text-base lg:text-[16px] font-dm-sans text-white/80 tracking-[-0.48px] leading-[1.4]">
                        Vault agents continuously monitor volatility, adjust bands, and execute exits when risk thresholds are hit. This helps maximise fees while reducing impermanent loss (IL).
                      </p>
                    </div>
                    
                    {/* Learn More Button */}
                    <div className="flex justify-start">
                      <Button 
                        variant="outline"
                        size="lg"
                        className="h-10 sm:h-11 rounded-xl border-[#ffe8c9] bg-transparent hover:bg-white/5 px-6"
                      >
                        <span className="bg-gradient-to-r from-[#ffe2c4] to-[#e8f3ff] bg-clip-text text-transparent font-dm-sans font-semibold text-base sm:text-lg lg:text-[18px]">
                          Learn more
                        </span>
                      </Button>
                    </div>
                    
                    {/* Audited By Section */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                      <span className="text-xs sm:text-sm lg:text-[14px] font-dm-sans text-white/75">Audited by</span>
                      <div className="flex items-center gap-2 sm:gap-4">
                        <img src={imgQuillauditsLogo} alt="QuillAudits" className="h-4 sm:h-5" />
                        <div className="flex items-center gap-1 sm:gap-2">
                          <div className="w-5 h-5 sm:w-[22px] sm:h-[22px] bg-gray-600 rounded-full" />
                          <span className="text-base sm:text-lg lg:text-[20px] font-dm-sans font-semibold text-white">
                            Hashlock
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual Content - Left Column on Desktop */}
                  <div className="w-full h-80 sm:h-96 lg:h-[420px] relative lg:order-1">
                    <div className="absolute bottom-0 left-0">
                      <img src={imgGlowEffect} alt="Glow" className="w-80 sm:w-96 lg:w-[403px] h-16 sm:h-20 lg:h-[81px]" />
                    </div>
                    <div className="absolute top-[8px] sm:top-[9px] lg:top-[9px] right-0 lg:right-[50px] w-52 sm:w-60 lg:w-[300px] h-52 sm:h-60 lg:h-[300px] overflow-hidden">
                      <img src={imgOptimizer} alt="Optimizer" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute top-[80px] sm:top-[95px] lg:top-[111px] left-[30px] sm:left-[45px] lg:left-[56px] w-24 sm:w-28 lg:w-[140px] h-40 sm:h-48 lg:h-[220px] overflow-hidden">
                      <img src={imgFeatureFish} alt="Fish" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BTCfi Section */}
      <section className="bg-[#010101] relative py-12 sm:py-16 md:py-20">
        <div className="px-4 sm:px-8 md:px-[200px]">
          <div className="max-w-[1040px] mx-auto">
            <div className="backdrop-blur-[20.45px] h-[150px] sm:h-[180px] md:h-[214px] rounded-3xl relative overflow-hidden border border-white/20">
              {/* Gradient Background */}
              <div 
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, #FF00FF 0%, #4A148C 30%, #1A237E 70%, #4A90E2 100%)',
                  opacity: 0.8
                }}
              />
              
              {/* Content */}
              <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-8 md:px-[200px]">
                {/* Left Fish - hidden on mobile */}
                <div className="hidden lg:block absolute left-[-100px] top-1/2 transform -translate-y-1/2 rotate-12">
                  <img src={imgBtcFishLeft} alt="BTC Fish" className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px]" />
                </div>
                
                {/* Center Content */}
                <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 text-center">
                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-dm-sans font-bold leading-[1.2] tracking-[-0.03em] lg:tracking-[-1.2px] bg-gradient-to-r from-[#FFE8C9] via-[#F9F4E9] via-[#E3F6FF] to-[#C9D4FF] bg-clip-text text-transparent">
                      BTCfi on NODO
                    </h2>
                    <div className="bg-gradient-to-r from-[#9DEBFF] to-[#00FF5E] rounded-[5px] px-2 py-1">
                      <span className="text-[#000000] font-dm-mono font-medium text-[10px] sm:text-[12px] tracking-[1px] sm:tracking-[2.54px] leading-[1] uppercase">
                        UPCOMING
                      </span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base lg:text-[16px] font-dm-sans font-medium text-white/80 tracking-[-0.01em] lg:tracking-[-0.48px] leading-[1.4] max-w-[500px] lg:max-w-[600px]">
                    Put your Bitcoin to work in DeFi: Earn yield and stay exposed to BTC
                  </p>
                </div>
                
                {/* Right Fish - hidden on mobile */}
                <div className="hidden lg:block absolute right-[-100px] top-1/2 transform -translate-y-1/2 rotate-[-12deg] scale-x-[-1]">
                  <img src={imgBtcFishRight} alt="BTC Fish" className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Inside AI Vault Agents Section */}
      <section className="bg-[#010101] relative py-12 sm:py-16 md:py-20">
        <div className="px-4 sm:px-8 md:px-[200px]">
          <div className="max-w-[1040px] mx-auto">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-dm-sans font-bold leading-[1.2] tracking-[-0.03em] lg:tracking-[-1.68px] bg-gradient-to-r from-[#FFE8C9] via-[#F9F4E9] via-[#E3F6FF] to-[#C9D4FF] bg-clip-text text-transparent mb-4 sm:mb-6">
                Inside AI Vault Agents
              </h2>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Left Column: How our AI Vaults Work */}
              <div className="relative">
                <div className="border border-white/20 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-dm-sans font-semibold text-white mb-8 text-center">
                    How our AI Vaults Work
                  </h3>
                  
                  {/* Flowchart */}
                  <div className="relative h-[400px] sm:h-[450px] md:h-[500px]">
                    {/* Purple/Blue Glow Background */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 opacity-30">
                      <div className="w-full h-full bg-gradient-to-br from-purple-500 via-blue-500 to-purple-700 rounded-full blur-3xl"></div>
                    </div>
                    
                    {/* Flow Steps */}
                    {/* Find Pools */}
                    <div className="absolute top-4 left-4 sm:left-8">
                      <div className="bg-black/80 border border-white/30 rounded-lg px-3 py-2 text-sm text-white font-dm-mono">
                        Find Pools
                      </div>
                    </div>
                    
                    {/* Swap & Bridge USDC */}
                    <div className="absolute top-4 right-4 sm:right-8">
                      <div className="bg-black/80 border border-white/30 rounded-lg px-3 py-2 text-sm text-white font-dm-mono">
                        Swap & Bridge USDC
                      </div>
                    </div>
                    
                    {/* Close Positions */}
                    <div className="absolute bottom-32 left-4 sm:left-8">
                      <div className="bg-black/80 border border-white/30 rounded-lg px-3 py-2 text-sm text-white font-dm-mono">
                        Close Positions
                      </div>
                    </div>
                    
                    {/* Open Positions */}
                    <div className="absolute bottom-32 right-4 sm:right-8">
                      <div className="bg-black/80 border border-white/30 rounded-lg px-3 py-2 text-sm text-white font-dm-mono">
                        Open Positions
                      </div>
                    </div>
                    
                    {/* Add/Remove Liquidity */}
                    <div className="absolute bottom-4 left-4 sm:left-8">
                      <div className="bg-black/80 border border-white/30 rounded-lg px-3 py-2 text-sm text-white font-dm-mono">
                        Add/Remove Liquidity
                      </div>
                    </div>
                    
                    {/* Monitor Positions */}
                    <div className="absolute bottom-4 right-4 sm:right-8">
                      <div className="bg-black/80 border border-white/30 rounded-lg px-3 py-2 text-sm text-white font-dm-mono">
                        Monitor Positions
                      </div>
                    </div>
                    
                    {/* Connecting Lines/Arrows */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      {/* Dotted connecting lines */}
                      <defs>
                        <pattern id="dots" patternUnits="userSpaceOnUse" width="8" height="8">
                          <circle cx="4" cy="4" r="1" fill="white" opacity="0.5"/>
                        </pattern>
                      </defs>
                      
                      {/* Horizontal top line */}
                      <line x1="25%" y1="15%" x2="75%" y2="15%" stroke="url(#dots)" strokeWidth="2"/>
                      
                      {/* Vertical right line */}
                      <line x1="75%" y1="15%" x2="75%" y2="40%" stroke="url(#dots)" strokeWidth="2"/>
                      
                      {/* Horizontal middle line */}
                      <line x1="25%" y1="40%" x2="75%" y2="40%" stroke="url(#dots)" strokeWidth="2"/>
                      
                      {/* Vertical left line */}
                      <line x1="25%" y1="40%" x2="25%" y2="85%" stroke="url(#dots)" strokeWidth="2"/>
                      
                      {/* Horizontal bottom line */}
                      <line x1="25%" y1="85%" x2="75%" y2="85%" stroke="url(#dots)" strokeWidth="2"/>
                    </svg>
                  </div>
                  
                  {/* Launch App Button */}
                  <div className="mt-8 flex justify-center">
                    <Button 
                      size="lg"
                      className="h-10 sm:h-12 rounded-xl bg-gradient-to-r from-[#FFE8C9] via-[#F9F4E9] via-[#E3F6FF] to-[#C9D4FF] text-[#0a080e] font-dm-sans font-semibold text-sm sm:text-base hover:opacity-90 px-6"
                    >
                      Launch App
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Column: NODO AI Vault Engine */}
              <div className="relative">
                <div className="border border-white/20 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-dm-sans font-semibold text-white mb-8 text-center">
                    NODO AI Vault Engine
                  </h3>
                  
                  {/* 2x2 Feature Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {/* Smart Routing */}
                    <div className="relative p-4 rounded-2xl overflow-hidden bg-gradient-to-br from-[#4A90E2]/20 via-[#357ABD]/10 to-[#2A5A9B]/5 border border-[#4A90E2]/30">
                      <div className="relative z-10 text-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 p-2 rounded-lg bg-[#4A90E2]/20">
                          <svg className="w-full h-full text-[#4A90E2]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                          </svg>
                        </div>
                        <h4 className="text-sm sm:text-base font-dm-sans font-semibold text-white mb-2">
                          Smart Routing
                        </h4>
                        <p className="text-xs text-white/70 font-dm-mono leading-relaxed">
                          Auto-optimized pair selection
                        </p>
                      </div>
                      {/* Glow Effect */}
                      <div className="absolute bottom-0 right-0 w-16 h-16 opacity-30">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#4A90E2] to-[#357ABD] blur-xl"></div>
                      </div>
                    </div>

                    {/* Risk Management */}
                    <div className="relative p-4 rounded-2xl overflow-hidden bg-gradient-to-br from-[#6BB6FF]/20 via-[#4A90E2]/10 to-[#357ABD]/5 border border-[#6BB6FF]/30">
                      <div className="relative z-10 text-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 p-2 rounded-lg bg-[#6BB6FF]/20">
                          <svg className="w-full h-full text-[#6BB6FF]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 1L3 5v6c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V5l-9-4z"/>
                          </svg>
                        </div>
                        <h4 className="text-sm sm:text-base font-dm-sans font-semibold text-white mb-2">
                          Risk Management
                        </h4>
                        <p className="text-xs text-white/70 font-dm-mono leading-relaxed">
                          Dynamic position sizing
                        </p>
                      </div>
                      {/* Glow Effect */}
                      <div className="absolute bottom-0 right-0 w-16 h-16 opacity-30">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#6BB6FF] to-[#4A90E2] blur-xl"></div>
                      </div>
                    </div>

                    {/* Yield Farming */}
                    <div className="relative p-4 rounded-2xl overflow-hidden bg-gradient-to-br from-[#4A90E2]/20 via-[#357ABD]/10 to-[#2A5A9B]/5 border border-[#4A90E2]/30">
                      <div className="relative z-10 text-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 p-2 rounded-lg bg-[#4A90E2]/20">
                          <svg className="w-full h-full text-[#4A90E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h4 className="text-sm sm:text-base font-dm-sans font-semibold text-white mb-2">
                          Yield Farming
                        </h4>
                        <p className="text-xs text-white/70 font-dm-mono leading-relaxed">
                          Multi-DEX Integration
                        </p>
                      </div>
                      {/* Glow Effect */}
                      <div className="absolute bottom-0 right-0 w-16 h-16 opacity-30">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#4A90E2] to-[#357ABD] blur-xl"></div>
                      </div>
                    </div>

                    {/* Rebalancing */}
                    <div className="relative p-4 rounded-2xl overflow-hidden bg-gradient-to-br from-[#FF00FF]/20 via-[#8B00FF]/10 to-[#6A0DAD]/5 border border-[#FF00FF]/30">
                      <div className="relative z-10 text-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 p-2 rounded-lg bg-[#FF00FF]/20">
                          <svg className="w-full h-full text-[#FF00FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        </div>
                        <h4 className="text-sm sm:text-base font-dm-sans font-semibold text-white mb-2">
                          Rebalancing
                        </h4>
                        <p className="text-xs text-white/70 font-dm-mono leading-relaxed">
                          Real-time optimization
                        </p>
                      </div>
                      {/* Glow Effect */}
                      <div className="absolute bottom-0 right-0 w-16 h-16 opacity-30">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FF00FF] to-[#8B00FF] blur-xl"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Launch App Button */}
                  <div className="flex justify-center">
                    <Button 
                      size="lg"
                      className="h-10 sm:h-12 rounded-xl bg-gradient-to-r from-[#FFE8C9] via-[#F9F4E9] via-[#E3F6FF] to-[#C9D4FF] text-[#0a080e] font-dm-sans font-semibold text-sm sm:text-base hover:opacity-90 px-6"
                    >
                      Launch App
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-[#010101] relative py-12 sm:py-16 md:py-20">
        <div className="px-4 sm:px-8 md:px-[200px]">
          <div className="max-w-[1040px] mx-auto">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] font-dm-sans font-bold leading-[1.2] tracking-[-0.03em] lg:tracking-[-1.68px] mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-[#FFE8C9] via-[#F9F4E9] via-[#E3F6FF] to-[#C9D4FF] bg-clip-text text-transparent">
                Our vision is to deploy AI agents across all Sui DeFi primitives, powering the future of liquidity and innovation
              </h2>
            </div>

            {/* Three Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* DEX Column */}
              <div className="bg-[#E8DCC6] rounded-3xl p-4 sm:p-6 md:p-8 text-black">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-dm-sans font-bold tracking-[-0.02em] lg:tracking-[-0.72px] mb-6 sm:mb-8">
                    DEX
                  </h3>
                  
                  {/* Partner Logos */}
                  <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                    <div className="flex justify-center">
                      <img src={imgMomentumLogo2} alt="Momentum" className="h-[22px]" />
                    </div>
                    <div className="flex justify-center">
                      <img src={imgCetusLogo2} alt="CETUS" className="h-[28px]" />
                    </div>
                  </div>
                  
                  {/* Benefits List */}
                  <div className="text-left space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <img src={imgCheckIcon} alt="Check" className="w-2 sm:w-[10px] h-3 sm:h-[17px] mt-1 flex-shrink-0" />
                      <span className="text-xs sm:text-sm lg:text-[14px] font-dm-sans font-medium leading-[1.2] tracking-[-0.01em] lg:tracking-[-0.28px]">
                        Reduced Slippage
                      </span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <img src={imgCheckIcon} alt="Check" className="w-2 sm:w-[10px] h-3 sm:h-[17px] mt-1 flex-shrink-0" />
                      <span className="text-xs sm:text-sm lg:text-[14px] font-dm-sans font-medium leading-[1.2] tracking-[-0.01em] lg:tracking-[-0.28px]">
                        Higher Trading Volume: More efficient price discovery and tighter spreads
                      </span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <img src={imgCheckIcon} alt="Check" className="w-2 sm:w-[10px] h-3 sm:h-[17px] mt-1 flex-shrink-0" />
                      <span className="text-xs sm:text-sm lg:text-[14px] font-dm-sans font-medium leading-[1.2] tracking-[-0.01em] lg:tracking-[-0.28px]">
                        Lower Impermanent Loss
                      </span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <img src={imgCheckIcon} alt="Check" className="w-2 sm:w-[10px] h-3 sm:h-[17px] mt-1 flex-shrink-0" />
                      <span className="text-xs sm:text-sm lg:text-[14px] font-dm-sans font-medium leading-[1.2] tracking-[-0.01em] lg:tracking-[-0.28px]">
                        New Token Support
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* PERP/CLOB EXCHANGES Column */}
              <div className="bg-[#C4D4E6] rounded-3xl p-8 text-black">
                <div className="text-center mb-8">
                  <h3 className="text-[24px] font-dm-sans font-bold tracking-[-0.72px] mb-8">
                    PERP/ CLOB EXCHANGES
                  </h3>
                  
                  {/* Partner Logos */}
                  <div className="space-y-6 mb-8">
                    <div className="flex justify-center">
                      <img src={imgBluefinLogo2} alt="bluefin" className="h-[24px]" />
                    </div>
                    <div className="flex justify-center">
                      <img src={imgDeepBookLogo} alt="DeepBook" className="h-[20px]" />
                    </div>
                  </div>
                  
                  {/* Benefits List */}
                  <div className="text-left space-y-4">
                    <div className="flex items-start gap-3">
                      <img src={imgCheckIcon} alt="Check" className="w-[10px] h-[17px] mt-1" />
                      <span className="text-[14px] font-dm-sans font-medium leading-[1.2] tracking-[-0.28px]">
                        Funding Rate Stabilization
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <img src={imgCheckIcon} alt="Check" className="w-[10px] h-[17px] mt-1" />
                      <span className="text-[14px] font-dm-sans font-medium leading-[1.2] tracking-[-0.28px]">
                        Order Book Depth
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* LENDING/BORROWING MARKETS Column */}
              <div className="bg-[#4A4A4A] rounded-3xl p-8 text-white">
                <div className="text-center mb-8">
                  <h3 className="text-[24px] font-dm-sans font-bold tracking-[-0.72px] mb-8">
                    LENDING/ BORROWING MARKETS
                  </h3>
                  
                  {/* Partner Logos */}
                  <div className="space-y-6 mb-8">
                    <div className="flex justify-center">
                      <img src={imgSuilendLogo} alt="Suilend" className="h-[33px]" />
                    </div>
                    <div className="flex justify-center">
                      <img src={imgScallopLogo} alt="Scallop" className="h-[33px]" />
                    </div>
                  </div>
                  
                  {/* Benefits List */}
                  <div className="text-left space-y-4">
                    <div className="flex items-start gap-3">
                      <img src={imgCheckIcon} alt="Check" className="w-[10px] h-[17px] mt-1" />
                      <span className="text-[14px] font-dm-sans font-medium leading-[1.2] tracking-[-0.28px]">
                        Optimized Interest Rates
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <img src={imgCheckIcon} alt="Check" className="w-[10px] h-[17px] mt-1" />
                      <span className="text-[14px] font-dm-sans font-medium leading-[1.2] tracking-[-0.28px]">
                        Reduced Utilization Volatility
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <img src={imgCheckIcon} alt="Check" className="w-[10px] h-[17px] mt-1" />
                      <span className="text-[14px] font-dm-sans font-medium leading-[1.2] tracking-[-0.28px]">
                        Lower Liquidation Risks
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <img src={imgCheckIcon} alt="Check" className="w-[10px] h-[17px] mt-1" />
                      <span className="text-[14px] font-dm-sans font-medium leading-[1.2] tracking-[-0.28px]">
                        Collateral Token Liquidity
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="bg-[#010101] relative py-12 sm:py-16 md:py-20">
        <div className="px-4 sm:px-8 md:px-[200px]">
          <div className="max-w-[1040px] mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12">
              <div className="w-full lg:flex-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-dm-sans font-bold leading-[1.2] tracking-[-0.03em] lg:tracking-[-1.44px] text-white">
                  Our Partners
                </h2>
              </div>
              <div className="w-full lg:flex-1">
                <p className="text-sm sm:text-base lg:text-[16px] font-dm-mono text-white/70 leading-[1.4] tracking-[-0.02em] lg:tracking-[-0.32px]">
                  We're building a strategic ecosystem across DeFi, AI, and Web3 where intelligence meets liquidity and innovation drives impact
                </p>
              </div>
            </div>

            {/* Partner Categories */}
            <div className="space-y-4 sm:space-y-6">
              {/* VCs / ACCELERATORS */}
              <div className="bg-gradient-to-r from-[#4A4A4A] to-[#2A2A2A] rounded-lg">
                <div className="px-4 sm:px-6 py-2 sm:py-3 bg-black/40 rounded-t-lg">
                  <h3 className="text-xs sm:text-sm lg:text-[14px] font-dm-sans font-semibold text-white/90 tracking-[0.3px] sm:tracking-[0.5px] uppercase">
                    VCs / ACCELERATORS
                  </h3>
                </div>
                <div className="px-4 sm:px-6 py-4 sm:py-6">
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 flex-wrap">
                    <img src={imgEmurgoLogo} alt="EMURGO" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgAdaverseLogo} alt="AdaVerse" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgKeppleLogo} alt="Kepple" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgCVLabsLogo} alt="CV Labs" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgGreenhouseLogo} alt="Greenhouse" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgSaladLogo} alt="Salad" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgWeb3VenturesLogo} alt="Web3 Ventures" className="h-6 sm:h-7 md:h-[30px]" />
                  </div>
                </div>
              </div>

              {/* LAUNCHPAD */}
              <div className="bg-gradient-to-r from-[#4A4A4A] to-[#2A2A2A] rounded-lg">
                <div className="px-4 sm:px-6 py-2 sm:py-3 bg-black/40 rounded-t-lg">
                  <h3 className="text-xs sm:text-sm lg:text-[14px] font-dm-sans font-semibold text-white/90 tracking-[0.3px] sm:tracking-[0.5px] uppercase">
                    LAUNCHPAD
                  </h3>
                </div>
                <div className="px-4 sm:px-6 py-4 sm:py-6">
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 flex-wrap">
                    <img src={imgSunPumpLogo} alt="Sun Pump" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgSporesLogo} alt="Spores" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgKommunitasLogo} alt="Kommunitas" className="h-6 sm:h-7 md:h-[30px]" />
                  </div>
                </div>
              </div>

              {/* EXCHANGES */}
              <div className="bg-gradient-to-r from-[#4A4A4A] to-[#2A2A2A] rounded-lg">
                <div className="px-4 sm:px-6 py-2 sm:py-3 bg-black/40 rounded-t-lg">
                  <h3 className="text-xs sm:text-sm lg:text-[14px] font-dm-sans font-semibold text-white/90 tracking-[0.3px] sm:tracking-[0.5px] uppercase">
                    EXCHANGES
                  </h3>
                </div>
                <div className="px-4 sm:px-6 py-4 sm:py-6">
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 flex-wrap">
                    <img src={imgOKXLogo} alt="OKX" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgCoinstoreLogo} alt="Coinstore" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgSuperexLogo} alt="Superex" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgExolixLogo} alt="Exolix" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgBitfinexLogo} alt="Bitfinex" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgProbitLogo} alt="Probit" className="h-6 sm:h-7 md:h-[30px]" />
                  </div>
                </div>
              </div>

              {/* L1 / L2 */}
              <div className="bg-gradient-to-r from-[#4A4A4A] to-[#2A2A2A] rounded-lg">
                <div className="px-4 sm:px-6 py-2 sm:py-3 bg-black/40 rounded-t-lg">
                  <h3 className="text-xs sm:text-sm lg:text-[14px] font-dm-sans font-semibold text-white/90 tracking-[0.3px] sm:tracking-[0.5px] uppercase">
                    L1 / L2
                  </h3>
                </div>
                <div className="px-4 sm:px-6 py-4 sm:py-6">
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-wrap">
                    <img src={imgTetherLogo} alt="Tether" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgAvalancheLogo} alt="Avalanche" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgListLogo} alt="List" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgCoinbaseLogo} alt="Coinbase" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgCBLOLogo} alt="CBLO" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgICPLogo} alt="Internet Computer" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgArtheraLogo} alt="Arthera" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgBitfinityLogo} alt="Bitfinity" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgHelaLogo} alt="HeLa" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgMultiversLogo} alt="Multivers" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgMultiplxLogo} alt="Multiplx" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgLiskLogo} alt="Lisk" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgOpenOceanLogo} alt="OpenOcean" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgBTCLayerLogo} alt="BTC Layer" className="h-6 sm:h-7 md:h-[30px]" />
                  </div>
                </div>
              </div>

              {/* DEFI / AI */}
              <div className="bg-gradient-to-r from-[#4A4A4A] to-[#2A2A2A] rounded-lg">
                <div className="px-4 sm:px-6 py-2 sm:py-3 bg-black/40 rounded-t-lg">
                  <h3 className="text-xs sm:text-sm lg:text-[14px] font-dm-sans font-semibold text-white/90 tracking-[0.3px] sm:tracking-[0.5px] uppercase">
                    DEFI / AI
                  </h3>
                </div>
                <div className="px-4 sm:px-6 py-4 sm:py-6">
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-wrap">
                    <img src={imgNeploLogo} alt="Neplo" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgEMoneyLogo} alt="E Money" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgSerenityLogo} alt="Serenity Shield" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgCanzaLogo} alt="Canza Finance" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgChangeNowLogo} alt="ChangeNOW" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgEarnParkLogo} alt="EarnPark" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgTrustSwapLogo} alt="TrustSwap" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgTakadaoLogo} alt="Takadao" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgFonbnkLogo} alt="Fonbnk" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgCoinprofileLogo} alt="Coinprofile" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgYellowCardLogo} alt="Yellow Card" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgInkFinanceLogo} alt="Ink Finance" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgSESOLogo} alt="SESO Global" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgKotaniLogo} alt="Kotani Pay" className="h-6 sm:h-7 md:h-[30px]" />
                  </div>
                </div>
              </div>

              {/* DEPIN / AI */}
              <div className="bg-gradient-to-r from-[#4A4A4A] to-[#2A2A2A] rounded-lg">
                <div className="px-4 sm:px-6 py-2 sm:py-3 bg-black/40 rounded-t-lg">
                  <h3 className="text-xs sm:text-sm lg:text-[14px] font-dm-sans font-semibold text-white/90 tracking-[0.3px] sm:tracking-[0.5px] uppercase">
                    DEPIN / AI
                  </h3>
                </div>
                <div className="px-4 sm:px-6 py-4 sm:py-6">
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 flex-wrap">
                    <img src={imgDCLogo} alt="DC" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgZeshLogo} alt="Zesh" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgSocialLiveLogo} alt="SocialLive" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgCassavaLogo} alt="Cassava" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgBrainedgeLogo} alt="Brainedge" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgDepinTechLogo} alt="DepinTech" className="h-6 sm:h-7 md:h-[30px]" />
                    <img src={imgAiphantLogo} alt="Aiphant" className="h-6 sm:h-7 md:h-[30px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-[#010101] relative py-12 sm:py-16 md:py-20">
        <div className="px-4 sm:px-8 md:px-[200px]">
          <div className="max-w-[1040px] mx-auto">
            {/* Header */}
            <div className="mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-dm-sans font-bold leading-[1.2] tracking-[-0.03em] lg:tracking-[-1.44px] text-white">
                Our Team
              </h2>
            </div>

            {/* Team Grid - Responsive Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              
              {/* Left Column */}
              <div className="space-y-8 lg:space-y-12">
                {/* Executive Team */}
                <div>
                  <h3 className="text-xs sm:text-sm lg:text-[14px] font-dm-sans font-medium text-white/90 tracking-[0.3px] sm:tracking-[0.5px] uppercase mb-6 lg:mb-8">
                    EXECUTIVE TEAM
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 lg:gap-8">
                    {/* Sowmya Raghavan */}
                    <div>
                      <div className="w-full max-w-[186px] aspect-square rounded-2xl bg-gradient-to-br from-[#4A90E2] to-[#FF00FF] p-[2px] mb-4 mx-0">
                        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#4A90E2] to-[#FF00FF] overflow-hidden">
                          <img 
                            src={imgSowmyaAvatar} 
                            alt="Sowmya Raghavan" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <h4 className="text-[14px] sm:text-[16px] font-dm-sans font-semibold text-white mb-1">
                        SOWMYA RAGHAVAN
                      </h4>
                      <p className="text-[10px] sm:text-[12px] font-dm-sans text-white/70 tracking-[0.5px] uppercase">
                        CO-FOUNDER, COO
                      </p>
                    </div>

                    {/* Vincent Li */}
                    <div>
                      <div className="w-full max-w-[186px] aspect-square rounded-2xl bg-gradient-to-br from-[#4A90E2] to-[#FF00FF] p-[2px] mb-4 mx-0">
                        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#4A90E2] to-[#FF00FF] overflow-hidden">
                          <img 
                            src={imgVincentAvatar} 
                            alt="Vincent Li" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <h4 className="text-[14px] sm:text-[16px] font-dm-sans font-semibold text-white mb-1">
                        VINCENT LI
                      </h4>
                      <p className="text-[10px] sm:text-[12px] font-dm-sans text-white/70 tracking-[0.5px] uppercase">
                        CO-FOUNDER
                      </p>
                    </div>
                  </div>
                </div>

                {/* Product Team */}
                <div>
                  <h3 className="text-xs sm:text-sm lg:text-[14px] font-dm-sans font-medium text-white/90 tracking-[0.3px] sm:tracking-[0.5px] uppercase mb-6 lg:mb-8">
                    PRODUCT TEAM
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 lg:gap-8">
                    {/* An Luu */}
                    <div>
                      <div className="w-full max-w-[186px] aspect-square rounded-2xl bg-gradient-to-br from-[#4A90E2] to-[#FF00FF] p-[2px] mb-4 mx-0">
                        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#4A90E2] to-[#FF00FF] overflow-hidden">
                          <img 
                            src={imgAnLuuAvatar} 
                            alt="An Luu" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <h4 className="text-[14px] sm:text-[16px] font-dm-sans font-semibold text-white mb-1">
                        AN LUU
                      </h4>
                      <p className="text-[10px] sm:text-[12px] font-dm-sans text-white/70 tracking-[0.5px] uppercase">
                        CTO
                      </p>
                    </div>

                    {/* Hai Tong */}
                    <div>
                      <div className="w-full max-w-[186px] aspect-square rounded-2xl bg-gradient-to-br from-[#4A90E2] to-[#FF00FF] p-[2px] mb-4 mx-0">
                        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#4A90E2] to-[#FF00FF] overflow-hidden">
                          <img 
                            src={imgHaiTongAvatar} 
                            alt="Hai Tong" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <h4 className="text-[14px] sm:text-[16px] font-dm-sans font-semibold text-white mb-1">
                        HAI TONG
                      </h4>
                      <p className="text-[10px] sm:text-[12px] font-dm-sans text-white/70 tracking-[0.5px] uppercase">
                        PRODUCT MANAGER
                      </p>
                    </div>
                  </div>
                </div>

                {/* Advisor Team - Moved to Left Column for Better Balance */}
                <div>
                  <h3 className="text-xs sm:text-sm lg:text-[14px] font-dm-sans font-medium text-white/90 tracking-[0.3px] sm:tracking-[0.5px] uppercase mb-6 lg:mb-8">
                    ADVISOR TEAM
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 lg:gap-8 justify-start">
                    {/* Panjun Wang */}
                    <div>
                      <div className="w-full max-w-[186px] aspect-square rounded-2xl bg-gradient-to-br from-[#4A90E2] to-[#FF00FF] p-[2px] mb-4 mx-0">
                        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#4A90E2] to-[#FF00FF] overflow-hidden">
                          <img 
                            src={imgPanJunAvatar} 
                            alt="Panjun Wang" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <h4 className="text-[14px] sm:text-[16px] font-dm-sans font-semibold text-white mb-1">
                        PANJUN WANG
                      </h4>
                      <p className="text-[10px] sm:text-[12px] font-dm-sans text-white/70 tracking-[0.5px] uppercase">
                        EMURGO AFRICA
                      </p>
                    </div>

                    {/* Shogo Ishida */}
                    <div>
                      <div className="w-full max-w-[186px] aspect-square rounded-2xl bg-gradient-to-br from-[#4A90E2] to-[#FF00FF] p-[2px] mb-4 mx-0">
                        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#4A90E2] to-[#FF00FF] overflow-hidden">
                          <img 
                            src={imgShogoAvatar} 
                            alt="Shogo Ishida" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <h4 className="text-[14px] sm:text-[16px] font-dm-sans font-semibold text-white mb-1">
                        SHOGO ISHIDA
                      </h4>
                      <p className="text-[10px] sm:text-[12px] font-dm-sans text-white/70 tracking-[0.5px] uppercase">
                        CO-FOUNDER
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8 lg:space-y-12">
                {/* Marketing Team */}
                <div>
                  <h3 className="text-xs sm:text-sm lg:text-[14px] font-dm-sans font-medium text-white/90 tracking-[0.3px] sm:tracking-[0.5px] uppercase mb-6 lg:mb-8">
                    MARKETING TEAM
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-1 gap-6 lg:gap-8">
                    <div>
                      <div className="w-full max-w-[186px] aspect-square rounded-2xl bg-gradient-to-br from-[#4A90E2] to-[#FF00FF] p-[2px] mb-4 mx-0">
                        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#4A90E2] to-[#FF00FF] overflow-hidden">
                          <img 
                            src={imgAldenAvatar} 
                            alt="Alden Paul Yburan" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <h4 className="text-[14px] sm:text-[16px] font-dm-sans font-semibold text-white mb-1">
                        ALDEN PAUL YBURAN
                      </h4>
                      <p className="text-[10px] sm:text-[12px] font-dm-sans text-white/70 tracking-[0.5px] uppercase">
                        MARKETING MANAGER
                      </p>
                    </div>
                  </div>
                </div>

                {/* Design Team */}
                <div>
                  <h3 className="text-xs sm:text-sm lg:text-[14px] font-dm-sans font-medium text-white/90 tracking-[0.3px] sm:tracking-[0.5px] uppercase mb-6 lg:mb-8">
                    DESIGN TEAM
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-1 gap-6 lg:gap-8">
                    <div>
                      <div className="w-full max-w-[186px] aspect-square rounded-2xl bg-gradient-to-br from-[#4A90E2] to-[#FF00FF] p-[2px] mb-4 mx-0">
                        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#4A90E2] to-[#FF00FF] overflow-hidden">
                          <img 
                            src={imgLeonAvatar} 
                            alt="Leon" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <h4 className="text-[14px] sm:text-[16px] font-dm-sans font-semibold text-white mb-1">
                        LEON
                      </h4>
                      <p className="text-[10px] sm:text-[12px] font-dm-sans text-white/70 tracking-[0.5px] uppercase">
                        DESIGN LEAD
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Forward-Thinking Roadmap Section */}
      <section className="bg-[#010101] relative py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="px-4 sm:px-8 md:px-[200px]">
          {/* Header */}
          <div className="max-w-[1040px] mx-auto flex flex-col lg:flex-row items-start justify-between mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="flex-1 mb-6 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-dm-sans font-bold leading-tight tracking-tight text-white mb-4">
                Forward-Thinking<br />Roadmap
              </h2>
            </div>
            <div className="flex-1 lg:pl-8 xl:pl-16">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-dm-mono text-white/70 leading-relaxed">
                Backed by Sui Hydropower, NODO is building an agentic AI-powered return generating ecosystem that brings the best of Sui DeFi to investors.
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="max-w-[1040px] mx-auto mb-6 sm:mb-8">
            <div className="w-full bg-white/10 rounded-full h-1 sm:h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-[#FF00FF] via-[#4A90E2] to-[#00FF5E] h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(roadmapProgress * 100)}%` }}
              />
            </div>
          </div>

          {/* Enhanced Roadmap Timeline */}
          <div className="max-w-[1040px] mx-auto">
            <div 
              ref={roadmapRef}
              className="overflow-x-auto scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex gap-4 sm:gap-6 md:gap-8 min-w-max pb-4">
                {roadmapData.map((milestone) => (
                  <div key={milestone.id} className="flex-shrink-0 w-72 sm:w-80 md:w-96">
                    <div 
                      className={`bg-gradient-to-br ${milestone.gradient} rounded-2xl p-4 sm:p-6 md:p-8 h-auto min-h-[400px] sm:min-h-[450px] md:min-h-[500px] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-${milestone.shadowColor} cursor-pointer group ${milestone.border || ''}`}
                      onClick={() => toggleRoadmapItem(milestone.id)}
                    >
                      <div className="flex items-center justify-between mb-2 sm:mb-4">
                        <div className="text-xs sm:text-sm md:text-base font-dm-sans font-semibold text-white/90 group-hover:text-white transition-colors">
                          {milestone.quarter}
                        </div>
                        <div className="md:hidden">
                          <svg 
                            className={`w-4 h-4 sm:w-5 sm:h-5 text-white/80 transition-transform duration-300 ${
                              expandedRoadmapItems.includes(milestone.id) ? 'rotate-180' : ''
                            }`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-dm-sans font-bold text-white mb-4 sm:mb-6 md:mb-8 group-hover:text-white/95 transition-colors leading-tight">
                        {milestone.title}
                      </h3>
                      
                      <div className={`space-y-2 sm:space-y-3 md:space-y-4 ${
                        expandedRoadmapItems.includes(milestone.id) ? 'block' : 'hidden md:block'
                      }`}>
                        {milestone.items.map((item, itemIndex) => (
                          <div 
                            key={itemIndex}
                            className="flex items-start gap-2 sm:gap-3 transform transition-all duration-300 group-hover:translate-x-1 hover:translate-x-2"
                          >
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full mt-2 flex-shrink-0 group-hover:bg-white/95 transition-all duration-300 hover:scale-150" />
                            <span className="text-xs sm:text-sm md:text-base font-dm-sans text-white/90 leading-relaxed group-hover:text-white transition-colors">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Mobile Expand/Collapse Indicator */}
                      <div className="md:hidden mt-4 sm:mt-6">
                        <div className="text-xs text-white/60 text-center">
                          {expandedRoadmapItems.includes(milestone.id) ? 'Tap to collapse' : 'Tap to expand'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Interactive Timeline Navigation */}
          <div className="flex justify-center mt-6 sm:mt-8 md:mt-12 gap-3 sm:gap-4 md:gap-6">
            {roadmapData.map((milestone, index) => (
              <button
                key={milestone.id}
                onClick={() => {
                  if (roadmapRef.current) {
                    const cardWidth = 320; // Approximate card width + gap
                    roadmapRef.current.scrollTo({
                      left: index * cardWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`relative w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer transform hover:rotate-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#010101] ${
                  index === 0 ? 'bg-[#FF00FF] focus:ring-purple-400 hover:shadow-lg hover:shadow-purple-500/50' :
                  index === 1 ? 'bg-white/40 hover:bg-white/60 focus:ring-white/50 hover:shadow-lg hover:shadow-white/30' :
                  index === 2 ? 'bg-[#4A90E2] focus:ring-blue-400 hover:shadow-lg hover:shadow-blue-500/50' :
                  'bg-[#00FF5E] focus:ring-green-400 hover:shadow-lg hover:shadow-green-500/50'
                }`}
                aria-label={`Go to ${milestone.quarter}`}
                title={milestone.quarter}
              >
                <div className="absolute inset-0 rounded-full animate-pulse opacity-0 hover:opacity-100 transition-opacity duration-300 bg-current" />
              </button>
            ))}
          </div>

          {/* Scroll Hint for Mobile */}
          <div className="md:hidden flex justify-center mt-4 sm:mt-6">
            <div className="text-xs sm:text-sm text-white/50 font-dm-mono flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Swipe to explore roadmap
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Impact Section */}
      <section className="bg-[#010101] relative py-12 sm:py-16 md:py-20">
        <div className="px-4 sm:px-8 md:px-[200px]">
          <div className="max-w-[1040px] mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-16 mb-8 sm:mb-12 md:mb-16">
              <div className="w-full lg:flex-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-dm-sans font-bold leading-[1.2] tracking-[-0.03em] lg:tracking-[-1.44px] text-white mb-6 sm:mb-8">
                  Built for Impact
                </h2>
                <button className="border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm lg:text-[14px] font-dm-sans font-medium text-white hover:bg-white/5 transition-colors">
                  Collaborate With Us
                </button>
              </div>
              <div className="w-full lg:flex-1">
                <p className="text-sm sm:text-base lg:text-[16px] font-dm-mono text-white/70 leading-[1.4] tracking-[-0.02em] lg:tracking-[-0.32px]">
                  Our team has hosted 70+ workshops and conferences across 4 countries, boosting Web3 literacy and expansion in Africa and emerging markets.
                </p>
              </div>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Large image on the left */}
              <div className="order-1">
                <div className="w-full h-48 sm:h-64 lg:h-[400px] bg-gradient-to-br from-[#4A90E2] to-[#357ABD] rounded-2xl p-[2px]">
                  <div className="w-full h-full rounded-2xl bg-[#1A1A1A] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-xs sm:text-sm lg:text-[14px] font-dm-sans text-white/70">
                        Workshop & Conference Photo
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - 2x2 grid */}
              <div className="order-2 grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {/* Top left */}
                <div className="bg-gradient-to-br from-[#FF00FF] to-[#8B00FF] rounded-2xl p-[2px]">
                  <div className="w-full h-24 sm:h-32 lg:h-full rounded-2xl bg-[#1A1A1A] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <svg width="16" height="16" className="sm:w-5 sm:h-5 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7ZM23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-xs lg:text-[12px] font-dm-sans text-white/70">
                        Team Photo
                      </p>
                    </div>
                  </div>
                </div>

                {/* Top right */}
                <div className="bg-gradient-to-br from-[#6BB6FF] to-[#4A90E2] rounded-2xl p-[2px]">
                  <div className="w-full h-24 sm:h-32 lg:h-full rounded-2xl bg-[#1A1A1A] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <svg width="16" height="16" className="sm:w-5 sm:h-5 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3 17L12 22L21 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3 12L12 17L21 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-xs lg:text-[12px] font-dm-sans text-white/70">
                        Conference
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom left */}
                <div className="bg-gradient-to-br from-[#FF6B6B] to-[#FF4757] rounded-2xl p-[2px]">
                  <div className="w-full h-24 sm:h-32 lg:h-full rounded-2xl bg-[#1A1A1A] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <svg width="16" height="16" className="sm:w-5 sm:h-5 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 6.253V10.5M12 10.5C14.2091 10.5 16 12.2909 16 14.5V16.5C16 18.7091 14.2091 20.5 12 20.5C9.79086 20.5 8 18.7091 8 16.5V14.5C8 12.2909 9.79086 10.5 12 10.5ZM12 10.5V6.253M12 6.253C12.8124 6.09413 13.6462 6.00015 14.5 6.00015C18.6421 6.00015 22 9.35801 22 13.5002V16.5C22 18.7091 20.2091 20.5 18 20.5C15.7909 20.5 14 18.7091 14 16.5V14.5M12 6.253C11.1876 6.09413 10.3538 6.00015 9.5 6.00015C5.35786 6.00015 2 9.35801 2 13.5002V16.5C2 18.7091 3.79086 20.5 6 20.5C8.20914 20.5 10 18.7091 10 16.5V14.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-xs lg:text-[12px] font-dm-sans text-white/70">
                        Workshop
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom right */}
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-2xl p-[2px] border border-white/10">
                  <div className="w-full h-24 sm:h-32 lg:h-full rounded-2xl bg-[#1A1A1A] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <svg width="16" height="16" className="sm:w-5 sm:h-5 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 18.105 20.105 19 19 19H5C3.895 19 3 18.105 3 17V8.5C3 7.395 3.895 6.5 5 6.5H19C20.105 6.5 21 7.395 21 8.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-xs lg:text-[12px] font-dm-sans text-white/70">
                        Event
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CNS Partnership Section */}
      <section className="bg-[#010101] relative py-12 sm:py-16 md:py-20">
        <div className="px-4 sm:px-8 md:px-[200px]">
          <div className="max-w-[1040px] mx-auto">
            <div className="bg-gradient-to-r from-[#0F2027] via-[#0F4C75] to-[#8E44AD] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center">
              {/* Logo Section */}
              <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                {/* NODO Logo */}
                <div className="flex items-center">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-dm-sans font-bold text-white">nodo</span>
                  <span className="text-xs sm:text-sm lg:text-[16px] font-dm-sans font-medium text-white/80 ml-1 -mt-3 sm:-mt-4 lg:-mt-6">™</span>
                </div>
                
                {/* X Symbol */}
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-dm-sans font-light text-white/80">
                  ×
                </div>
                
                {/* CNS Logo */}
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-white/20 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                    <svg width="16" height="16" className="sm:w-5 sm:h-5 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-dm-sans font-bold text-white">CNS</span>
                </div>
              </div>

              {/* Headline */}
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-dm-sans font-bold text-white leading-[1.2] tracking-[-0.03em] lg:tracking-[-0.96px] mb-4 sm:mb-6">
                Social Trading Markets Integrates Cardano DID Infrastructure
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-[16px] font-dm-mono text-white/80 leading-[1.5] tracking-[-0.02em] lg:tracking-[-0.32px] mb-6 sm:mb-8 max-w-[600px] mx-auto">
                NODO is officially integrating CNS, a Decentralized Identity (DID) service built on Cardano, to enhance user verification and on-chain identity management across its platform.
              </p>

              {/* CTA Button */}
              <button className="bg-transparent border border-white/30 rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm lg:text-[14px] font-dm-sans font-medium text-white hover:bg-white/10 transition-colors">
                Explore Opportunities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#010101] relative py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="px-4 sm:px-8 md:px-[200px]">
          <div className="max-w-[1040px] mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              {/* Left Content */}
              <div className="w-full lg:flex-1 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-dm-sans font-bold text-white leading-[1.1] tracking-[-0.03em] lg:tracking-[-1.68px] mb-6 sm:mb-8">
                  <span className="block">Let's Build the Future of</span>
                  <span className="block">Autonomous Decentralised</span>
                  <span className="block">Finance Together</span>
                </h2>
                <button className="border border-white/20 rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm lg:text-[14px] font-dm-sans font-medium text-white hover:bg-white/5 transition-colors">
                  Get in touch
                </button>
              </div>

              {/* Right Content - Glowing Orb */}
              <div className="w-full lg:flex-1 flex justify-center items-center order-first lg:order-last">
                <div className="relative scale-75 sm:scale-90 lg:scale-100">
                  {/* Outer glow */}
                  <div className="absolute inset-0 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full bg-gradient-to-br from-[#FF00FF] via-[#8B00FF] to-[#00FFFF] opacity-30 blur-[30px] sm:blur-[35px] lg:blur-[40px] animate-pulse"></div>
                  
                  {/* Middle glow */}
                  <div className="absolute inset-3 sm:inset-4 w-[170px] h-[170px] sm:w-[210px] sm:h-[210px] lg:w-[260px] lg:h-[260px] rounded-full bg-gradient-to-br from-[#FF00FF] via-[#8B00FF] to-[#00FFFF] opacity-50 blur-[15px] sm:blur-[18px] lg:blur-[20px]"></div>
                  
                  {/* Inner orb */}
                  <div className="relative w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[220px] lg:h-[220px] rounded-full bg-gradient-to-br from-[#FF00FF] via-[#8B00FF] to-[#00FFFF] p-[2px]">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FF00FF]/20 via-[#8B00FF]/20 to-[#00FFFF]/20 backdrop-blur-sm flex items-center justify-center">
                      {/* Inner reflection */}
                      <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] rounded-full bg-gradient-to-br from-white/20 to-transparent blur-[1px]"></div>
                    </div>
                  </div>
                  
                  {/* Additional glow effects */}
                  <div className="absolute top-6 left-6 sm:top-8 sm:left-8 w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[40px] lg:h-[40px] rounded-full bg-white/30 blur-[6px] sm:blur-[7px] lg:blur-[8px]"></div>
                  <div className="absolute bottom-8 right-8 sm:bottom-10 sm:right-10 lg:bottom-12 lg:right-12 w-[15px] h-[15px] sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px] rounded-full bg-[#00FFFF]/50 blur-[3px] sm:blur-[3.5px] lg:blur-[4px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#010101] relative py-12 sm:py-16 md:py-20 border-t border-white/10">
        <div className="px-4 sm:px-8 md:px-[200px]">
          <div className="max-w-[1040px] mx-auto">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 mb-12 sm:mb-16">
              <div className="w-full lg:flex-1">
                <div className="flex items-center mb-4 sm:mb-6">
                  <span className="text-xl sm:text-2xl lg:text-[32px] font-dm-sans font-bold bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] bg-clip-text text-transparent">nodo</span>
                  <span className="text-xs lg:text-[12px] font-dm-sans font-medium text-white/80 ml-1 -mt-2 sm:-mt-3 lg:-mt-4">™</span>
                </div>
                <p className="text-xs sm:text-sm lg:text-[14px] font-dm-mono text-white/70 leading-[1.5] max-w-[400px]">
                  NODO is a yield infrastructure protocol delivering autonomous, AI-powered liquidity provisioning to DeFi. It operates intelligent vaults on-chain that actively manage LP positions in real time, maximizing capital efficiency, minimizing impermanent loss, and capturing trading fees across top decentralized exchanges.
                </p>
              </div>
              
              <div className="w-full lg:flex-1">
                <h3 className="text-sm sm:text-base lg:text-[16px] font-dm-sans font-semibold text-white mb-4 sm:mb-6">Navigation</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center">
                    <a href="#" className="text-xs sm:text-sm lg:text-[14px] font-dm-sans text-white/70 hover:text-white transition-colors">NODO AI</a>
                    <span className="ml-2 text-xs lg:text-[10px] font-dm-sans font-medium text-[#00FF88] bg-[#00FF88]/10 px-2 py-1 rounded">COMING SOON</span>
                  </div>
                  <a href="#" className="block text-xs sm:text-sm lg:text-[14px] font-dm-sans text-white/70 hover:text-white transition-colors">Docs</a>
                  <a href="#" className="block text-xs sm:text-sm lg:text-[14px] font-dm-sans text-white/70 hover:text-white transition-colors">Contact</a>
                </div>
              </div>
            </div>

            {/* Partners Section */}
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 mb-12 sm:mb-16">
              <div className="w-full lg:flex-1">
                <h3 className="text-xs sm:text-sm lg:text-[14px] font-dm-sans font-medium text-white/90 mb-4 sm:mb-6">Audited by</h3>
                <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-wrap">
                  <div className="flex items-center bg-[#1A1A1A] rounded-lg px-3 sm:px-4 py-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-[#4A90E2] to-[#357ABD] rounded-full flex items-center justify-center mr-2">
                      <span className="text-xs lg:text-[10px] font-dm-sans font-bold text-white">Q</span>
                    </div>
                    <span className="text-xs lg:text-[12px] font-dm-sans font-medium text-white">QuillAudits</span>
                  </div>
                  <div className="flex items-center bg-[#1A1A1A] rounded-lg px-3 sm:px-4 py-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-[#FF6B6B] to-[#FF4757] rounded-full flex items-center justify-center mr-2">
                      <span className="text-xs lg:text-[10px] font-dm-sans font-bold text-white">H</span>
                    </div>
                    <span className="text-xs lg:text-[12px] font-dm-sans font-medium text-white">Hashlock</span>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:flex-1">
                <h3 className="text-xs sm:text-sm lg:text-[14px] font-dm-sans font-medium text-white/90 mb-4 sm:mb-6">Strategic Integration Partners</h3>
                <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-wrap">
                  <div className="flex items-center bg-[#1A1A1A] rounded-lg px-3 sm:px-4 py-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-[#6BB6FF] to-[#4A90E2] rounded-full flex items-center justify-center mr-2">
                      <svg width="10" height="10" className="sm:w-3 sm:h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-xs lg:text-[12px] font-dm-sans font-medium text-white">OnRamp</span>
                  </div>
                  <div className="flex items-center bg-[#1A1A1A] rounded-lg px-3 sm:px-4 py-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-[#8B00FF] to-[#FF00FF] rounded-full flex items-center justify-center mr-2">
                      <svg width="10" height="10" className="sm:w-3 sm:h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-xs lg:text-[12px] font-dm-sans font-medium text-white">CNS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {/* Follow Us Card */}
              <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C16 10.2091 14.2091 12 12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8Z" stroke="white" strokeWidth="2"/>
                    <path d="M12 14C16.4183 14 20 17.5817 20 22H4C4 17.5817 7.58172 14 12 14Z" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base lg:text-[16px] font-dm-sans font-semibold text-white mb-3 sm:mb-4">Follow Us</h3>
                <div className="flex items-center justify-center gap-4">
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.246.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Customer Support Card */}
              <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base lg:text-[16px] font-dm-sans font-semibold text-white mb-3 sm:mb-4">For customer support queries</h3>
                <button className="border border-white/20 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm lg:text-[14px] font-dm-sans font-medium text-white hover:bg-white/5 transition-colors">
                  Contact Support
                </button>
              </div>

              {/* Partnership Card */}
              <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 7H4C2.9 7 2 7.9 2 9V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V9C22 7.9 21.1 7 20 7Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 11V17H10V11H14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 7L12 2L2 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base lg:text-[16px] font-dm-sans font-semibold text-white mb-3 sm:mb-4">For partnership queries</h3>
                <button className="border border-white/20 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm lg:text-[14px] font-dm-sans font-medium text-white hover:bg-white/5 transition-colors">
                  Get in Touch
                </button>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
                <span className="text-xs lg:text-[12px] font-dm-sans text-white/60">©2024 NODO. All rights reserved.</span>
                <div className="flex items-center gap-3 sm:gap-6">
                  <a href="#" className="text-xs lg:text-[12px] font-dm-sans text-white/60 hover:text-white transition-colors">T&C</a>
                  <a href="#" className="text-xs lg:text-[12px] font-dm-sans text-white/60 hover:text-white transition-colors">Privacy Policy</a>
                </div>
              </div>
              <div className="sm:ml-auto">
                <span className="text-xs lg:text-[12px] font-dm-sans text-white/60">NODO Global Limited 10 Anson Road, #22-06 International Plaza, Singapore 079903</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
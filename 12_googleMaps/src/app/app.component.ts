import { Component } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { startWith } from 'rxjs/internal/operators/startWith';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';



interface State {
  flag: string;
  name: string;
  population: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  center = { lat: 51.503186, lng: - 0.126446 };

  locations = [
    { 'lat': 51.5145160, 'lng': -0.1270060 },
    { 'lat': 51.5064490, 'lng': -0.1244260, 'title': 'Corinthia Hotel London', 'snippet': 'Whitehall Pl' },
    { 'lat': 51.5097080, 'lng': -0.1200450, 'title': 'Savoy Place', 'snippet': 'Covent Garden' },
    { 'lat': 51.5090680, 'lng': -0.1421420, 'title': 'Albemarle St', 'snippet': 'Mayfair' },
    { 'lat': 51.4976080, 'lng': -0.1456320, 'title': ' Victoria Square', 'snippet': ' Belgravia' },
    { 'lat': 51.5046150, 'lng': -0.1473780 },
    { 'lat': 51.5077540, 'lng': -0.1378760, 'title': 'Jermyn Street', 'snippet': 'St. James\'s' },
    { 'lat': 51.5074250, 'lng': -0.1323230, 'title': 'Pall Mall', 'snippet': 'Westminster' },
    { 'lat': 51.5070030, 'lng': -0.125560 },
    { 'lat': 51.5061590, 'lng': -0.140280 },
    { 'lat': 51.5047420, 'lng': -0.1470490 },
    { 'lat': 51.5126760, 'lng': -0.1189760 },
    { 'lat': 51.5108480, 'lng': -0.1208480 },
    { 'lat': 51.5099460, 'lng': -0.1300150 },
    { 'lat': 51.5076580, 'lng': -0.1424490 },
    { 'lat': 51.5097160, 'lng': -0.1555350 },
    { 'lat': 51.5215190, 'lng': -0.1621160 },
    { 'lat': 51.5177960, 'lng': -0.1438760 },
    { 'lat': 51.5071840, 'lng': -0.1415940 },
    { 'lat': 51.5008150, 'lng': -0.1520910 },
    { 'lat': 51.5179170, 'lng': -0.142740 },
    { 'lat': 51.50360, 'lng': -0.14980 },
    { 'lat': 51.512620, 'lng': -0.1476950 },
    { 'lat': 51.5051890, 'lng': -0.08813600000000001 },
    { 'lat': 51.4969390, 'lng': -0.1594880 },
    { 'lat': 51.506020, 'lng': -0.1241340 },
    { 'lat': 51.5143270, 'lng': -0.1318940 },
    { 'lat': 51.5070480, 'lng': -0.1521930 },
    { 'lat': 51.5101640, 'lng': -0.1495920 },
    { 'lat': 51.5144240, 'lng': -0.1392980 },
    { 'lat': 51.4816380, 'lng': -0.1489180 },
    { 'lat': 51.519340, 'lng': -0.1209080 },
    { 'lat': 51.4982420, 'lng': -0.1435160 },
    { 'lat': 51.5104310, 'lng': -0.1267850 },
    { 'lat': 51.504340, 'lng': -0.149940 },
    { 'lat': 51.5174490, 'lng': -0.1370170 },
    { 'lat': 51.524370, 'lng': -0.1281460 },
    { 'lat': 51.5117770, 'lng': -0.1192630 },
    { 'lat': 51.5026220, 'lng': -0.1527130 },
    { 'lat': 51.500210, 'lng': -0.1798050 },
    { 'lat': 51.5293450, 'lng': -0.1260930 },
    { 'lat': 51.514070, 'lng': -0.0854980 },
    { 'lat': 51.5154290, 'lng': -0.1571420 },
    { 'lat': 51.5158980, 'lng': -0.1202010 },
    { 'lat': 51.5081370, 'lng': -0.1438340 },
    { 'lat': 51.4990650, 'lng': -0.1343110 },
    { 'lat': 51.5059290, 'lng': -0.1491020 },
    { 'lat': 51.5017470, 'lng': -0.1848540 },
    { 'lat': 51.510820, 'lng': -0.1511460 },
    { 'lat': 51.5128620, 'lng': -0.192130 },
    { 'lat': 51.49850, 'lng': -0.1583950 },
    { 'lat': 51.5094440, 'lng': -0.1362880 },
    { 'lat': 51.5239250, 'lng': -0.1249180 },
    { 'lat': 51.4930180, 'lng': -0.159680 },
    { 'lat': 51.5055380, 'lng': -0.1396880 },
    { 'lat': 51.4892760, 'lng': -0.180180 },
    { 'lat': 51.4999860, 'lng': -0.161490 },
    { 'lat': 51.5183870, 'lng': -0.1350570 },
    { 'lat': 51.5025980, 'lng': -0.1883030 },
    { 'lat': 51.4702570, 'lng': -0.1776650 },
    { 'lat': 51.5184940, 'lng': -0.1452920 },
    { 'lat': 51.4943450, 'lng': -0.1145180 },
    { 'lat': 51.5174860, 'lng': -0.1307490 },
    { 'lat': 51.47570, 'lng': -0.1819760 },
    { 'lat': 51.4917980, 'lng': -0.161740 },
    { 'lat': 51.5081480, 'lng': -0.1653260 },
    { 'lat': 51.5241310, 'lng': -0.18460 },
    { 'lat': 51.5255790, 'lng': -0.0828410 },
    { 'lat': 51.4944410, 'lng': -0.1360670 },
    { 'lat': 51.4924780, 'lng': -0.1483010 },
    { 'lat': 51.5101220, 'lng': -0.1967860 },
    { 'lat': 51.4947680, 'lng': -0.1186810 },
    { 'lat': 51.5108440, 'lng': -0.131580 },
    { 'lat': 51.4906890, 'lng': -0.1386160 },
    { 'lat': 51.4991350, 'lng': -0.1125320 },
    { 'lat': 51.5113950, 'lng': -0.1427780 },
    { 'lat': 51.4905960, 'lng': -0.1388970 },
    { 'lat': 51.4908430, 'lng': -0.1440980 },
    { 'lat': 51.4900210, 'lng': -0.1376870 },
    { 'lat': 51.5102170, 'lng': -0.1315040 },
    { 'lat': 51.4903170, 'lng': -0.1377590 },
    { 'lat': 51.5101040, 'lng': -0.1322540 },
    { 'lat': 51.5156830, 'lng': -0.1240560 },
    { 'lat': 51.5116380, 'lng': -0.1384670 },
    { 'lat': 51.4973190, 'lng': -0.156080 },
    { 'lat': 51.5180390, 'lng': -0.1497690 },
    { 'lat': 51.4930840, 'lng': -0.1443660 },
    { 'lat': 51.498970, 'lng': -0.1062350 },
    { 'lat': 51.5113380, 'lng': -0.1300990 },
    { 'lat': 51.4920160, 'lng': -0.1419380 },
    { 'lat': 51.507070, 'lng': -0.1049530 },
    { 'lat': 51.5059030, 'lng': -0.1403950 },
    { 'lat': 51.5160770, 'lng': -0.1353810 },
    { 'lat': 51.494140, 'lng': -0.1411990 },
    { 'lat': 51.5225950, 'lng': -0.1253190 },
    { 'lat': 51.4957540, 'lng': -0.1476890 },
    { 'lat': 51.5052860, 'lng': -0.150260 },
    { 'lat': 51.4966970, 'lng': -0.1122920 },
    { 'lat': 51.5201680, 'lng': -0.1256960 },
    { 'lat': 51.4929010, 'lng': -0.1572410 },
    { 'lat': 51.5019440, 'lng': -0.1562350 },
    { 'lat': 51.489530, 'lng': -0.1366590 },
    { 'lat': 51.5134410, 'lng': -0.1508490 },
    { 'lat': 51.5025440, 'lng': -0.118110 },
    { 'lat': 51.491640, 'lng': -0.1415830 },
    { 'lat': 51.5115110, 'lng': -0.1183470 },
    { 'lat': 51.4909510, 'lng': -0.1438210 },
    { 'lat': 51.5071040, 'lng': -0.1461620 },
    { 'lat': 51.5186970, 'lng': -0.1355270 },
    { 'lat': 51.5178830, 'lng': -0.1185430 },
    { 'lat': 51.492470, 'lng': -0.1455250 },
    { 'lat': 51.5015740, 'lng': -0.1624430 },
    { 'lat': 51.5135820, 'lng': -0.1086290 },
    { 'lat': 51.4920260, 'lng': -0.1418470 },
    { 'lat': 51.4907580, 'lng': -0.1445780 },
    { 'lat': 51.4913140, 'lng': -0.144820 },
    { 'lat': 51.490830, 'lng': -0.1443390 },
    { 'lat': 51.5139170, 'lng': -0.122090 },
    { 'lat': 51.4922580, 'lng': -0.1418670 },
    { 'lat': 51.5160140, 'lng': -0.1578750 },
    { 'lat': 51.5109460, 'lng': -0.076930 },
    { 'lat': 51.4930270, 'lng': -0.142960 },
    { 'lat': 51.49990, 'lng': -0.1781820 },
    { 'lat': 51.5035550, 'lng': -0.1113130 },
    { 'lat': 51.4903060, 'lng': -0.1403020 },
    { 'lat': 51.4936240, 'lng': -0.1500960 },
    { 'lat': 51.4919830, 'lng': -0.1414270 },
    { 'lat': 51.5050970, 'lng': -0.104710 },
    { 'lat': 51.4950920, 'lng': -0.1838080 },
    { 'lat': 51.5259280, 'lng': -0.1358780 },
    { 'lat': 51.5057060, 'lng': -0.1221970 },
    { 'lat': 51.4952410, 'lng': -0.1817070 },
    { 'lat': 51.4940420, 'lng': -0.1492270 },
    { 'lat': 51.490370, 'lng': -0.1458720 },
    { 'lat': 51.5077260, 'lng': -0.1471730 },
    { 'lat': 51.4651970, 'lng': -0.114940 },
    { 'lat': 51.5138860, 'lng': -0.1012070 },
    { 'lat': 51.518720, 'lng': -0.153870 },
    { 'lat': 51.4913010, 'lng': -0.1428370 },
    { 'lat': 51.5151350, 'lng': -0.1615710 },
    { 'lat': 51.5188840, 'lng': -0.1318310 },
    { 'lat': 51.5020890, 'lng': -0.186790 },
    { 'lat': 51.4907170, 'lng': -0.1386760 },
    { 'lat': 51.5182760, 'lng': -0.1582390 },
    { 'lat': 51.5195190, 'lng': -0.1430740 },
    { 'lat': 51.5241420, 'lng': -0.1378130 },
    { 'lat': 51.5077230, 'lng': -0.1279620 },
    { 'lat': 51.4938750, 'lng': -0.1497910 },
    { 'lat': 51.5237550, 'lng': -0.1403980 },
    { 'lat': 51.4933780, 'lng': -0.1500050 },
    { 'lat': 51.4901580, 'lng': -0.1387650 },
    { 'lat': 51.5159630, 'lng': -0.1718890 },
    { 'lat': 51.4908250, 'lng': -0.1450190 },
    { 'lat': 51.5264680, 'lng': -0.1353710 },
    { 'lat': 51.5173210, 'lng': -0.156650 },
    { 'lat': 51.5140620, 'lng': -0.1469230 },
    { 'lat': 51.5028270, 'lng': -0.0720070 },
    { 'lat': 51.5206650, 'lng': -0.1003340 },
    { 'lat': 51.502060, 'lng': -0.1599840 },
    { 'lat': 51.5277390, 'lng': -0.135320 },
    { 'lat': 51.5219420, 'lng': -0.1321670 },
    { 'lat': 51.5152990, 'lng': -0.1600470 },
    { 'lat': 51.4907870, 'lng': -0.1388240 },
    { 'lat': 51.4945090, 'lng': -0.174880 },
    { 'lat': 51.5219720, 'lng': -0.1322210 },
    { 'lat': 51.4900030, 'lng': -0.0977280 },
    { 'lat': 51.5222270, 'lng': -0.1425630 },
    { 'lat': 51.4977620, 'lng': -0.08125599999999999 },
    { 'lat': 51.5081250, 'lng': -0.07108100000000001 },
    { 'lat': 51.5179610, 'lng': -0.1529610 },
    { 'lat': 51.5129390, 'lng': -0.1577410 },
    { 'lat': 51.4935420, 'lng': -0.1594010 },
    { 'lat': 51.5157770, 'lng': -0.173090 },
    { 'lat': 51.4948150, 'lng': -0.1778260 },
    { 'lat': 51.4964460, 'lng': -0.1557010 },
    { 'lat': 51.4916430, 'lng': -0.1006060 },
    { 'lat': 51.5122920, 'lng': -0.1750390 },
    { 'lat': 51.5202170, 'lng': -0.1025320 },
    { 'lat': 51.5076930, 'lng': -0.1413620 },
    { 'lat': 51.491520, 'lng': -0.1426860 },
    { 'lat': 51.5138990, 'lng': -0.1787940 },
    { 'lat': 51.5221330, 'lng': -0.1325740 },
    { 'lat': 51.5135120, 'lng': -0.1631850 },
    { 'lat': 51.5067690, 'lng': -0.0740210 },
    { 'lat': 51.5201120, 'lng': -0.1238560 },
    { 'lat': 51.4925250, 'lng': -0.1451160 },
    { 'lat': 51.5162150, 'lng': -0.1733980 },
    { 'lat': 51.5228320, 'lng': -0.155350 },
    { 'lat': 51.5212420, 'lng': -0.1558640 },
    { 'lat': 51.5284530, 'lng': -0.1226970 },
    { 'lat': 51.5223030, 'lng': -0.1325830 },
    { 'lat': 51.5197430, 'lng': -0.1431740 },
    { 'lat': 51.5216440, 'lng': -0.1318630 },
    { 'lat': 51.5172640, 'lng': -0.08090 },
    { 'lat': 51.474050, 'lng': -0.0895920 },
    { 'lat': 51.5181490, 'lng': -0.1581730 },
    { 'lat': 51.5159250, 'lng': -0.1600310 },
    { 'lat': 51.5243350, 'lng': -0.1165120 },
    { 'lat': 51.4907560, 'lng': -0.1434930 },
    { 'lat': 51.4900980, 'lng': -0.1373290 }
  ];

  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];

  constructor() {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }
}

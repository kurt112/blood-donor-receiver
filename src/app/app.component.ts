import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  provinceAddressByRegionId,
  regionAddress,
  stateAddressByProvinceCode,
} from 'src/config/http/address';
import { Address, Province, Region, State } from 'src/types/Address';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  address: Address = {
    region: null,
    province: null,
    state: null,
  };

  regions: Region[] = [];
  provinces: Province[] = [];
  states: State[] = [];

  public appPages = [
    { title: 'Donor', url: '/donor', icon: 'mail' },
    { title: 'Receiver', url: '/receiver', icon: 'paper-plane' },
  ];

  constructor(private http: HttpClient) {
    this.getRegions();
  }

  _handleChangeRegion = (region: Region) => {
    this.getProvincebyRegion(region.code);
  };

  _handleChangeProvince = (province: Province) => {
    this.getStateByProvince(province.code);
  };

  _handleChangeState = (provinceCode: string) => {
    this.getStateByProvince(provinceCode);
  };

  getRegions = () => {
    this.http.get<Region[]>(regionAddress).subscribe((data: Region[]) => {
      this.regions = data;
      this.address = {
        ...this.address,
        province: null,
        state: null,
      };
      this.provinces = [];
      this.states = [];
    });
  };

  getProvincebyRegion = (regionCode: string) => {
    if (regionCode == null) {
      alert("region can't found");
      return;
    }

    const provinceByRegionUrl = provinceAddressByRegionId(regionCode);

    this.http
      .get<Province[]>(provinceByRegionUrl)
      .subscribe((data: Province[]) => {
        this.provinces = data;
        this.states = [];
        this.address = {
          ...this.address,
          state: null,
        };
      });
  };

  getStateByProvince = (provinceCode: string) => {
    if (provinceCode == null) {
      alert("region can't found");
      return;
    }

    const stateByProvinceUrl = stateAddressByProvinceCode(provinceCode);

    this.http.get<State[]>(stateByProvinceUrl).subscribe((data: State[]) => {
      this.states = data;
    });
  };
}

import { Injectable, ForbiddenException } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { ConfigService } from '@nestjs/config'
import { Observable, map, catchError, lastValueFrom } from 'rxjs'
import { AxiosResponse, AxiosRequestConfig } from 'axios'

@Injectable()
export class BigsellerService {
  constructor(
    private readonly http: HttpService,
    private config: ConfigService,
  ) {}

  async getListProductShopee(): Promise<Observable<AxiosResponse<any[]>>> {
    // get params copy from bigseller request
    const params = {
      orderBy: 'create_time',
      desc: 'true',
      searchType: 'productName',
      inquireType: '0',
      shopeeStatus: 'live',
      status: 'active',
      pageNo: '1',
      pageSize: '50',
    }

    // get an environment variable
    const headers = {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=UTF-8',
      Cookie: this.config.get<string>('BIGSELLER_COOKIE'),
    }

    return await lastValueFrom(
      this.http
        .get(
          'https://www.bigseller.com/api/v1/product/listing/shopee/active.json',
          { params, headers },
        )
        .pipe(map((res) => res.data?.data?.page?.rows || []))
        .pipe(
          catchError(() => {
            throw new ForbiddenException('API not available')
          }),
        ),
    )
  }
}

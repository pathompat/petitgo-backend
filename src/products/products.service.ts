import { Inject, Injectable } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { firestore } from 'firebase-admin'
import { REQUEST } from '@nestjs/core'
import { Product } from './entities/product.entity'
import DocumentSnapshot = firestore.DocumentSnapshot
import QuerySnapshot = firestore.QuerySnapshot

@Injectable()
export class ProductsService {
  private collection: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>

  constructor(@Inject(REQUEST) private readonly request: { user: any }) {
    this.collection = firestore().collection('products')
  }

  create(createProductDto: CreateProductDto) {
    return this.collection.add(createProductDto).then((doc) => {
      return { id: doc.id, ...createProductDto };
    });
  }

  findAll() {
    return this.collection
      .get()
      .then((querySnapshot: QuerySnapshot<Product>) => {
        if (querySnapshot.empty) {
          return []
        }

        const products: Product[] = []
        for (const doc of querySnapshot.docs) {
          products.push(doc.data())
        }

        return products
      })
  }

  findOne(id: number) {
    return `This action returns a #${id} product`
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`
  }

  remove(id: number) {
    return `This action removes a #${id} product`
  }
}

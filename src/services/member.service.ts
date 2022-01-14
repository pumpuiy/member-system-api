import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class MemberService {
  constructor(
    @Inject('MEMBER_MODEL')
    private memberModel: Model<any>,
  ) {}

  async getItems()  {
    return await this.memberModel.find();
  }

  createItem() {
    this.memberModel.create([
      {
          firstname: 'firstname',
          lastname: 'lastname',
          email: 'email',
          password: 'password',
          id: 1,
          position: 'post',
          image: 'img',
          role: 2
      }
    ]);

  }

}
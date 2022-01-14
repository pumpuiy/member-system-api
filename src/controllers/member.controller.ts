import { Body, Controller, Get, Post } from '@nestjs/common';
import { now } from 'mongoose';
import { MemberService } from '../services/member.service';


@Controller("member")
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get()
  findAll() {
    return this.memberService.getItems();
  }

  @Post()
  createItem() {
    this.memberService.createItem();
  }
}

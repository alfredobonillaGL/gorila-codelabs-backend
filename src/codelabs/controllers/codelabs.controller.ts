import { Controller, Get, Res, HttpStatus, NotFoundException, Param, Body, Post, Query, Delete, Patch } from '@nestjs/common';
import { CodelabsService } from '../service/codelabs.service';
import { ValidateObjectId } from '../../shared/pipes/valIdate-object-Id.pipes';
import { CodelabDto } from '../dto/codelab.dto';

@Controller('codelabs')
export class CodelabsController {

  constructor(private codelabsService: CodelabsService) { }

  @Get()
  async getCodelabs(@Res() res) {
      const codelabs = await this.codelabsService.getCodelabs();
      return res.status(HttpStatus.OK).json(codelabs);
  }

  @Get('codelab/:codelabId')
  async getCodelab(@Res() res, @Param('codelabId', new ValidateObjectId()) codelabId) {
      const codelab = await this.codelabsService.getCodelab(codelabId);
      if (!codelab) {
        throw new NotFoundException('codelab does not exist!');
      }
      return res.status(HttpStatus.OK).json(codelab);

  }

  @Post('/create')
  async createCodelab(@Res() res, @Body() codelabDto: CodelabDto) {
      const newcodelab = await this.codelabsService.createCodelab(codelabDto);
      return res.status(HttpStatus.OK).json({
          message: 'codelab has been submitted successfully!',
          codelab: newcodelab,
      });
  }

  @Patch('/edit')
  async editcodelab(
      @Res() res,
      @Query('codelabId', new ValidateObjectId()) codelabId,
      @Body() codelabDto: CodelabDto,
  ) {
      const editedCodelab = await this.codelabsService.editCodelab(codelabId, codelabDto);
      if (!editedCodelab) {
        throw new NotFoundException('Codelab does not exist!');
      }
      return res.status(HttpStatus.OK).json({
          message: 'Codelab has been successfully updated',
          codelab: editedCodelab,
      });
  }

  @Delete('/delete')
  async deleteCodelab(@Res() res, @Query('codelabId', new ValidateObjectId()) codelabId) {
      const deltedCodelab = await this.codelabsService.deleteCodelab(codelabId);
      if (!deltedCodelab) {
        throw new NotFoundException('Codelab does not exist!');
      }
      return res.status(HttpStatus.OK).json({
          message: 'Codelab has been deleted!',
          codelab: deltedCodelab,
      });
  }
}

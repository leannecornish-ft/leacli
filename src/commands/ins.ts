import {Command} from '@oclif/command'
import cli from 'cli-ux'

export default class Ins extends Command {
  static description = 'install dependencies'

  static args = [{name: 'package', required: false}]
  // static args = [{name: 'repository', required: true}]

  async run() {
    this.log(this.parse(Ins))
    const {args} = this.parse(Ins)
    // this.log('1', args.package)
    const pck = args.package ?? ' '
    this.log(`hello you are running npm install ${pck}`)
    await cli.wait(3000)
    // if (args.package) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }
  }
}


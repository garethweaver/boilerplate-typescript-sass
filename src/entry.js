import './assets/style/screen.sass'
import { AppModule } from './app.module';

let app = new AppModule('world');

console.log(app.greet())

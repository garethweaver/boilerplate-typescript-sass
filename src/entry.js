require('./assets/style/screen')

import { AppModule } from './app.module';

let app = new AppModule('world');

document.write(app.greet());


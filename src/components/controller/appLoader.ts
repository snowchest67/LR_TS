import Loader from './loader';
import { LoaderOptions } from '../../types';

class AppLoader extends Loader {
    constructor() {
        const options: LoaderOptions = {
            apiKey: process.env.API_KEY as string,
        };
        super(process.env.API_URL as string, options);
    }
}

export default AppLoader;

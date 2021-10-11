import env from 'env-var';

export default {
    BOT_TOKEN: env.get('BOT_TOKEN').required().asString()
}
const microcommander = require('./MicroCommander.js');
const mc = new microcommander('config.json', 'my-service', 5500, false);

mc.defineLog('mylog', 50, 'Logs');

mc.defineAction('test', () => {
	console.log('test');
	mc.appendLog('mylog', 'test');
}, '');

mc.defineFileUpload('examplefile', 2 * 1024 * 1024, 'examplefile.txt', 'File Uploads');

mc.defineSwitch('mycron', true, 'Switches');

mc.defineCron('getwishlists', async () => {
	if(!mc.isSwitchOn('mycronswitch')) return;

	console.log('Get Wishlists!');

	// Get the Wishlist CSV
	const wl_csv = await getCSV(generateWishlistURL(getYesterday()), 'steamcookies');
	// Split the CSV string by lines and remove the first two lines
	const cleanedCsvString = wl_csv.split('\n').slice(2).join('\n').trim();

	if(wl_csv != null) {
		await sheetAppender.appendToSheet(table_id, 'Wishlists', cleanedCsvString);
		mc.appendLog('mylog', "Wishlists: success");
	}
}, 'Cron Tasks');

mc.listen();
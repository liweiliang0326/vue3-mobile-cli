import cp from 'child_process';
// const gitHash = cp.execSync('git show -s --format=%h').toString().trim();
const version = `${process.argv[2]}`;

console.log(`包名：${version}.zip`);

cp.exec(`rm -f ${version}.zip && zip -r ${version}.zip ./dist`, { maxBuffer: 1024 * 1200 }, (error) => {
	if (error) {
		console.log(error);
	} else {
		console.log('压缩成功');
	}
});

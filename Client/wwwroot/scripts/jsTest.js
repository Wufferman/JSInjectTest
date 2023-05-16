export function showAlert(message) {
    alert(message);
}
export async function fun() {

    let device = await navigator.hid.requestDevice({ filters: [{ vendorId: 5426 }] });
    console.log(device);
    navigator.hid.addEventListener("disconnect", ({ device }) => {
        console.log("Oh noes");
    });
    navigator.hid.addEventListener("connect", ({ device }) => {
        console.log("Yay");
    });

    for (let collection of device[1].collections) {
        // An HID collection includes usage, usage page, reports, and subcollections.
        console.log(`Usage: ${collection.usage}`);
        console.log(`Usage page: ${collection.usagePage}`);

        for (let inputReport of collection.inputReports) {
            console.log(`Input report: ${inputReport.reportId}`);
            // Loop through inputReport.items
        }

        for (let outputReport of collection.outputReports) {
            console.log(`Output report: ${outputReport.reportId}`);
            // Loop through outputReport.items
        }

        for (let featureReport of collection.featureReports) {
            console.log(`Feature report: ${featureReport.reportId}`);
            // Loop through featureReport.items
        }

        // Loop through subcollections with collection.children
    }

} 
export async function showOld(){
    let devices = await navigator.hid.getDevices();
   

}
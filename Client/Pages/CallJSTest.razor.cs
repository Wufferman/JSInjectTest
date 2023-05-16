using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace JSInjectTest.Client.Pages
{
    public partial class CallJSTest
    {
        [Inject]
        public IJSRuntime JSRuntime { get; set; }

        private IJSObjectReference _jsModule;

        public string myMessage = "This Is My Test Message String";

        protected override async Task OnInitializedAsync()
        {
            _jsModule = await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./scripts/jsTest.js");
        }

        public async Task ShowAlertWindow(string message)
        {
            await _jsModule.InvokeVoidAsync("fun");
        }

        public async Task ShowOldDevices()
        {
            await _jsModule.InvokeVoidAsync("showOld");
        }

    }
}

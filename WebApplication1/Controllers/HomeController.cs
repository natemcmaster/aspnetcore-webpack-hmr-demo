using Microsoft.AspNetCore.Mvc;

namespace Hmr.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index() => View();
    }
}

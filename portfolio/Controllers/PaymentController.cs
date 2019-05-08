using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace portfolio.Controllers
{
    public class PaymentController : Controller
    {
        public ActionResult Pay()
        {
            return View();
        }
    }
}
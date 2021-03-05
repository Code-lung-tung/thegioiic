<div id="login_dialog" class="dialog_bank" style="display: none;">
  <div class="title-box">
    Đăng Nhập
    <span class="close_box" onclick="$('#login_dialog').hide();">X</span>
  </div>
  <div class="bank-container">
    <div style="padding:8px 0 12px 12px;">
        <form class="new_user" id="new_user" method="POST" action="{{ route('login') }}">
            <input name="utf8" type="hidden" value="✓">
            @csrf
              <p style="padding:8px 0 0 0; font-weight:bolder;">
                Email
              </p>
              <p>
                <input value="{{ old('email') }}" style="width: 285px; padding: 6px; background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAkCAYAAADo6zjiAAAAAXNSR0IArs4c6QAAAnVJREFUWAntVzuL4lAUPokBsVB0t9odK8VCLCal3Q4WbmUpCFv6DyymEmys9gf4B4RlS7GwEWQsBAsL195q2J3KWIiVrz0nJBcTk9yr3jCw7AG5j3PO9325j2OiAFq73X7Y7/ffsft0Op0+05wsUxTlD2K9aJr23Gw2f7txFYv8FxJ/dDtljlHICkU8ukWo9ORhk9ODEIe1yo7nUnH05JgJd3DBpcre8yD9Xly0Au9q/7aAfD4PjUYDqPWzUFegUChAIpEAav0sVAF4901eu/USEaoAL0L3nENANBqFbDYLqVTKHQe3+i6AXBOaPU4mk1Cv1yEej8PxeIR+vw/z+dx03+qzsYNatgLFYtEkp2BVVaFUKrG8W30MIKDDBATEhOpiAqbTKWw2G5OMtmA0GjHiW30MIKCjtFqtk+2ng5ZOp8EwDFiv1/a02Qb5HIGcAV7JNwwZW+8Hrw4BnFypbhRioAidbYFUdAEw/Gf8QO8H7ybA0viF1QEB0cIhmUwGqtUqxGIxM2cymcBwOLzIx1X4JF0A1YxyuWzWkgtGjwlpAiKRCFQqFdB13YPGf0qagFqtBrlczmSiOkJGFZVnKl4Hem+/26hYEfHhcIBerwe73U4IkyS+CEVygpbLJQwGA+h2u7BYLIC2RMSwFmjPeB+/4om8+8NkNpsxzqCXEBaEHZW+VFDEIyb8kLUd5wS8vnkIrc+lb7xg8p//d4jE82L4x5SHcKf/v4CrCxEe1Deq4byVX61WrBBtt1vPcMK6WgAijfFX80Q8m+x0Omcj3+746jNAdQOVG76Qgg7CIKyrBeCVfcVEHQF+0hIK8rEwyqFcwiCsv+R847qxq2vXAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;" type="email" name="email" id="user_email" autocomplete="off">
              </p>
              <p style="padding:8px 0 0 0; font-weight:bolder;">
                Mật khẩu
              </p>
              <p>
                <input style="width: 285px; padding: 6px; background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAkCAYAAADo6zjiAAAAAXNSR0IArs4c6QAAAnVJREFUWAntVzuL4lAUPokBsVB0t9odK8VCLCal3Q4WbmUpCFv6DyymEmys9gf4B4RlS7GwEWQsBAsL195q2J3KWIiVrz0nJBcTk9yr3jCw7AG5j3PO9325j2OiAFq73X7Y7/ffsft0Op0+05wsUxTlD2K9aJr23Gw2f7txFYv8FxJ/dDtljlHICkU8ukWo9ORhk9ODEIe1yo7nUnH05JgJd3DBpcre8yD9Xly0Au9q/7aAfD4PjUYDqPWzUFegUChAIpEAav0sVAF4901eu/USEaoAL0L3nENANBqFbDYLqVTKHQe3+i6AXBOaPU4mk1Cv1yEej8PxeIR+vw/z+dx03+qzsYNatgLFYtEkp2BVVaFUKrG8W30MIKDDBATEhOpiAqbTKWw2G5OMtmA0GjHiW30MIKCjtFqtk+2ng5ZOp8EwDFiv1/a02Qb5HIGcAV7JNwwZW+8Hrw4BnFypbhRioAidbYFUdAEw/Gf8QO8H7ybA0viF1QEB0cIhmUwGqtUqxGIxM2cymcBwOLzIx1X4JF0A1YxyuWzWkgtGjwlpAiKRCFQqFdB13YPGf0qagFqtBrlczmSiOkJGFZVnKl4Hem+/26hYEfHhcIBerwe73U4IkyS+CEVygpbLJQwGA+h2u7BYLIC2RMSwFmjPeB+/4om8+8NkNpsxzqCXEBaEHZW+VFDEIyb8kLUd5wS8vnkIrc+lb7xg8p//d4jE82L4x5SHcKf/v4CrCxEe1Deq4byVX61WrBBtt1vPcMK6WgAijfFX80Q8m+x0Omcj3+746jNAdQOVG76Qgg7CIKyrBeCVfcVEHQF+0hIK8rEwyqFcwiCsv+R847qxq2vXAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;" type="password" name="password" id="user_password" autocomplete="off">
              </p>

              <p style="padding:12px 0 0 0px; text-align:left;">
                <input type="submit" name="commit" value="Đăng Nhập" class="btn btn-primary" data-disable-with="Đăng Nhập">
                &nbsp;&nbsp;<span id="tool-log"><a href="#">Quên mật khẩu?</a> | <a href="{{ route('register') }}">Đăng Ký</a></span>
              </p>
        </form>     
        <div class="clear"></div>
    </div>
  </div>
</div>

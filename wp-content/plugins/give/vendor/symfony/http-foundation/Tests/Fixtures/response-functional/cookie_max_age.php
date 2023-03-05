
Deprecated: Return type of Symfony\Component\HttpFoundation\HeaderBag::getIterator() should either be compatible with IteratorAggregate::getIterator(): Traversable, or the #[\ReturnTypeWillChange] attribute should be used to temporarily suppress the notice in D:\Apps\xamp\htdocs\backup\wp-content\plugins\give\vendor\symfony\http-foundation\HeaderBag.php on line 288

Deprecated: Return type of Symfony\Component\HttpFoundation\HeaderBag::count() should either be compatible with Countable::count(): int, or the #[\ReturnTypeWillChange] attribute should be used to temporarily suppress the notice in D:\Apps\xamp\htdocs\backup\wp-content\plugins\give\vendor\symfony\http-foundation\HeaderBag.php on line 298

Fatal error: Uncaught ValueError: setcookie(): "expires" option cannot have a year greater than 9999 in D:\Apps\xamp\htdocs\backup\wp-content\plugins\give\vendor\symfony\http-foundation\Tests\Fixtures\response-functional\cookie_max_age.php:10
Stack trace:
#0 D:\Apps\xamp\htdocs\backup\wp-content\plugins\give\vendor\symfony\http-foundation\Tests\Fixtures\response-functional\cookie_max_age.php(10): setcookie('foo2', 'bar', 253402310800, '/')
#1 {main}
  thrown in D:\Apps\xamp\htdocs\backup\wp-content\plugins\give\vendor\symfony\http-foundation\Tests\Fixtures\response-functional\cookie_max_age.php on line 10

Array
(
    [0] => Content-Type: text/plain; charset=utf-8
    [1] => Cache-Control: no-cache, private
    [2] => Date: Sat, 12 Nov 1955 20:04:00 GMT
    [3] => Set-Cookie: foo=bar; expires=Sat, 01-Jan-10000 02:46:40 GMT; Max-Age=251724266843; path=/
)
shutdown

<?php
 
namespace SmartOSC\CommentCartPage\Block\Cart;
 
class AbstractCart
{
 
	public function afterGetItemRenderer(\Magento\Checkout\Block\Cart\AbstractCart $subject, $result)
	{
        $result->setTemplate('SmartOSC_CommentCartPage::cart/item/default.phtml');
    	return $result;
	}
}
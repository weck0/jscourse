<?php

namespace Course\JsFun\ViewModel;

use Magento\Framework\View\Element\Block\ArgumentInterface;

class Message implements ArgumentInterface
{
    public function getMesage()
    {
        return str_shuffle('Declarative Test');
    }

}
